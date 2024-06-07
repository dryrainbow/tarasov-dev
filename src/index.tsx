/* @refresh reload */
import { render } from 'solid-js/web';

import { I18nContext } from "@solid-primitives/i18n";

import { StoreProvider } from "./store/index";
import './index.css';
import App from './App';
import localization from './localization';

render(
  () => (
    <StoreProvider>
      <I18nContext.Provider value={localization}>
        <App />
      </I18nContext.Provider>
    </StoreProvider>
  ),
  document.getElementById('root') as HTMLElement
);
