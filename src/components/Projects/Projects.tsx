import { For } from 'solid-js';
import { createViewportObserver } from '@solid-primitives/intersection-observer';

import { useStore } from '../../store/index';
import type { Store } from '../../store/index';
import { scrollHereWhenSelected } from "../../utlis/scroll";
import styles from './Projects.module.css';
import normalProjects from './projectList';
import Project from './Project';
import type { Project as ProjectType } from './projectList';

export default () => {
  const [state, setters] = useStore() as Store;
  const [intersectionObserver] = createViewportObserver({ threshold: 0.1 });
  const chapterName = 'projects'
  const projects = normalProjects

  return (
    <div
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
      class={styles.Projects}
    >
      <For each={projects}>{(project: ProjectType, i) =>
        <Project
          project={project}
          odd={i() % 2 === 1}
        />
      }</For>

    </div>
  )
};
