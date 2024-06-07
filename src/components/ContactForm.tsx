import { useI18n } from "@solid-primitives/i18n";
import { createViewportObserver } from '@solid-primitives/intersection-observer';

import { useStore } from '../store/index';
import type { Store } from '../store/index';
import { scrollHereWhenSelected } from "../utlis/scroll";
import styles from './ContactForm.module.css';

export default () => {
  const [t] = useI18n();
  const [state, setters] = useStore() as Store;
  const [intersectionObserver] = createViewportObserver({ threshold: 0.9 });
  const chapterName = 'mail';

  return (
    <div
      use:intersectionObserver={(event) => {
        if (event.isIntersecting) {
          if (!state.scrolling()) {
            setters.setVisibleChapter(chapterName);
          } else if (state.visibleChapter() === chapterName) {
            setters.setScrolling(false)
          }
          // Сраный костыль
        } else if (state.visibleChapter() === chapterName) {
          setters.setVisibleChapter('projects');
        }
      }}
      ref={(element) => scrollHereWhenSelected(element, [state, setters], chapterName)}
      class={styles.ContactForm}
    >
      <form
        class={styles.form}
        action="https://send.pageclip.co/ipMETNW8CCV8ka21myU6D22bvnOAV0Ag"
        method="post"
        autocomplete='off'
      >
        <input
          type="text"
          name="name"
          placeholder={t('name')}
        ></input>

        <textarea
          name="message"
          placeholder={t('message')}
          rows='4'
        ></textarea>

        <input
          type="email"
          placeholder={t('email')}
          name="email"
        ></input>

        <input
          class={styles.submit}
          type="submit"
          value={t('submit')}
        ></input>
      </form>
    </div>
  )
}