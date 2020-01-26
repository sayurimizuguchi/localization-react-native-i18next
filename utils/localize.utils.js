import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';

import { en, pt } from '../localize-keys';

const languageKeys = { en, pt };

const i18nextOptions = {
  fallbackLng: 'en',
  ns: 'translation',
  debug: false,
  preload: true,
  languageKeys,
  initImmediate: false,
	load: 'languageOnly',
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	}
};

export const initialize = () =>
	i18next
	.use(i18nextReactNative)
	.use(initReactI18next)
	.init(i18nextOptions);

export const translateKey = (key, interpolation) =>
  i18next.t(key, interpolation);
