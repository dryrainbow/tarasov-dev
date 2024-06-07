import { For } from 'solid-js';
import { useI18n } from "@solid-primitives/i18n";

import styles from './Project.module.css';
import type { Project } from './projectList';
import earthIcon from '../../assets/icons/earth.svg';
import { Icon } from './iconList';

export default (props: { project: Project, odd: boolean }) => {
  const [t] = useI18n();

  function linkFor(icon: Icon) {
    if (icon.git) return props.project.repo
    if (icon.npm) return props.project.npm
    return undefined
  }

  return (
    <div
      class={styles.Project}
      classList={{
        [styles.Project_odd]: props.project.flip ? !props.odd : props.odd,
        [styles.Project_halfWidth]: props.project.halfWidth,
        [styles.Project_desktopOnly]: props.project.desktopOnly
      }}
    >
      {
        typeof props.project.preview === 'string'
        ? 
        <img
          class={styles.preview}
          src={props.project.preview as string}
          style={props.project.previewStyle}
        />
        :
        <props.project.preview />
      }
      <div
        class={styles.body}
      >
        <a
          href={props.project.link}
          target="_blank"
          class={styles.name}
        >
          <h2 class={styles.nameHeader}>
            {props.project.name}
          </h2>
          <img src={earthIcon} height="20px" />
        </a>
        <div class={styles.description}>
          {t(props.project.descriptionSlug)}
        </div>

        <div class={styles.techIcons}>
          <For each={props.project.icons}>{(icon: Icon) =>
            <a
              href={linkFor(icon)}
              target="_blank"
              class={styles.techIcon}
            >
              <img
                src={icon.src}
                style={{
                  transform: `translate(${icon.offsets?.x}px, ${icon.offsets?.y}px) scale(${icon.scale})`,
                  height: '20px',
                }}
              />
            </a>
          }</For>
        </div>
      </div>
    </div>
  )
}