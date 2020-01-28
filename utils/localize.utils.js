import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { en, pt } from '../localize-keys';


const resources = { en, pt };

export const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};


export const i18nextOptions = {
	fallbackLng: 'en',
	debug: true,
	resources,
	whitelist: Object.keys(resources),
	nonExplicitWhitelist: true,
	load: 'languageOnly',
	initImmediate: false,
};

export const translate = (key, interpolation) =>
  t(key, interpolation);
