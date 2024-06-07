import { useI18n } from "@solid-primitives/i18n";

import styles from './LanguageSelector.module.css';
import globeIcon from '../assets/icons/globe.svg';

export default () => {
  const [t, { locale }] = useI18n();

  const avaliableLocales = ['en', 'ru'];
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    locale(savedLocale);
  } else {
    const preferredLocales = navigator.languages.map((lang) => lang.substring(0, 2));
    for (const lang of preferredLocales) {
      if (avaliableLocales.includes(lang)) {
        locale(lang);
        break;
      }
    }
  }

  return (
    <div
      onClick={() => {
        switch (locale()) {
          case 'ru':
            locale('en')
            break;
          case 'en':
            locale('ru')
            break;
        }
        localStorage.setItem('locale', locale());
      }}
      class={styles.LanguageSelector}
    >
      <img src={globeIcon} />
      {t('lang')}
    </div>
  )
}
