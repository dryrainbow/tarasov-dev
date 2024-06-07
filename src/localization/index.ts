import { createI18nContext } from "@solid-primitives/i18n";

import ru from './ru.json';
import en from './en.json';

const dict = {
  ru, en
}


export default createI18nContext(dict, "en");


