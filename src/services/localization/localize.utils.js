import i18next from 'i18next';

import { en, pt } from '../../../localize-keys';

export const resources = { en, pt };

/**
 * i18next initalization parameters
 * for more details https://www.i18next.com/overview/configuration-options
 */
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

/**
 * Translates the key that is passed in as per interpolation for dymanic values
 * @param {string} key String that contains the key of the object to translate
 * @param {Object} interpolation dynamic object to translate
 */
export const translate = (key, interpolation) => i18next.t(key, interpolation);

/**
 * @param {string} language String language key, e.g 'en'
 */
export const changeLanguage = (language) => i18next.changeLanguage(language, (err) => {
  if (err) return console.log('something went wrong', err);
});

/**
 * i18next resources setted
 * @return {Array} of languages, e.g ['en', 'pt']
 */
export const supportedLanguages = () => i18next.laguanges;

/**
 * ISO format comes language-Country e.g en-US
 * @return {string} only language from the ISO format, e.g 'en'
 */
export const currentLanguage = () => {
  const removeCountryFromISOLanguage = i18next.language.split('-').shift();
  return removeCountryFromISOLanguage;
};
