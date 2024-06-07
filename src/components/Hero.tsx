import { useI18n } from "@solid-primitives/i18n";
import { createViewportObserver } from '@solid-primitives/intersection-observer';

import { useStore } from '../store/index';
import type { Store } from '../store/index';
import Links from './Links';
import { scrollHereWhenSelected } from "../utlis/scroll";
import styles from './Hero.module.css';

export default () => {
  const [t] = useI18n();
  const [intersectionObserver] = createViewportObserver({ threshold: 0.8 });
  const [state, setters] = useStore() as Store;
  const chapterName = 'home'

  return (
    <header
      use:intersectionObserver={(event) => {
        if (event.isIntersecting) {
          if (!state.scrolling()) {
            setters.setVisibleChapter(chapterName);
          } else if (state.visibleChapter() === chapterName) {
            setters.setScrolling(false)
          }
        }
      }}
      ref={(element) => scrollHereWhenSelected(element, [state, setters], chapterName)}
      class={styles.Hero}
    >
      <h1 class={styles.gradientText}>
        {t('my_name')}
      </h1>
      <div>
        {t('tagline')}
      </div>

      <Links />

      <div
        class={styles.blur}
        ref={(element) => {
          setTimeout(() => element.style.opacity = '0')
        }}
      />
    </header>
  )
};
