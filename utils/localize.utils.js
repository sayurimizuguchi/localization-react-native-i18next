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
	whitelist: Object.keys(resources),
	debug: true,
	ns: 'translation',
	preload: true,
	resources,
	initImmediate: false,
	load: 'languageOnly',
  nonExplicitWhitelist: true,
};

export const translate = (key, interpolation) =>
  t(key, interpolation);
