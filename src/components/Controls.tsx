import { For, createSignal, createEffect } from 'solid-js'

import { useStore } from '../store/index'
import type { Store } from '../store/index'
import styles from './Controls.module.css'
import LanguageSelector from './LanguageSelector'
import homeIcon from '../assets/icons/home.svg'
import gridIcon from '../assets/icons/grid.svg'
import mailIcon from '../assets/icons/mail.svg'

export default () => {
  const [state, { setVisibleChapter, setScrolling }] = useStore() as Store
  const [selected, setSelected] = createSignal('home')
  const [blobby, setBlobby] = createSignal(['home'])
  const chapters = [
    { name: 'home', icon: homeIcon },
    { name: 'projects', icon: gridIcon },
    { name: 'mail', icon: mailIcon },
  ]

  const selectChapter = (chapterName: string) => {
    if (chapterName !== selected()) {
      setSelected(chapterName)
      setVisibleChapter(chapterName)
      setBlobby(b => [chapterName, ...b])
      setTimeout(() => {
        setBlobby(b => [chapterName])
      }, 500);
    }
  }

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  const gooey = !isSafari

  createEffect((prev) => {
    if (prev !== state.visibleChapter()) {
      selectChapter(state.visibleChapter())
    }
    return state.visibleChapter()
  });

  return (
    <>
      <div class={styles.Controls}>
        <div class={styles.chapters}>
          <div
            class={styles.gooWrapper}
            classList={{
              [styles.gooey]: gooey
            }}
          >
            <For each={chapters}>{(chapter) =>
              <div
                class={styles.blob}
                classList={{
                  [styles.selected]: blobby().includes(chapter.name)
                }}
              ></div>
            }</For>
          </div>
          <div class={styles.controlsWrapper}>
            <For each={chapters}>{(chapter) =>
              <div
                onClick={() => {
                  setScrolling(true);
                  selectChapter(chapter.name)
                }}
                class={styles.control}
              >
                <img
                  src={chapter.icon}
                />
              </div>
            }</For>
          </div>
        </div>

        <LanguageSelector />
      </div>

      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
