import styles from './Links.module.css';

export default () => {
  return (
    <div class={styles.Links}>
      <a
        href='https://hh.ru/applicant/resumes/view?resume=b8d039e4ff051d479e0039ed1f713470393434'
        target='_blank'
      >
        hh.ru
      </a>
      <a
        href='https://github.com/dryrainbow'
        target='_blank'
      >
        github
      </a>
      <a
        href='https://t.me/dryrainbow'
        target='_blank'
      >
        telegram
      </a>
      <a
        href='https://habr.com/ru/users/snapoak/publications/articles/'
        target='_blank'
      >
        habr
      </a>
    </div>
  )
}
