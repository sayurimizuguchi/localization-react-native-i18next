import { NativeModules } from 'react-native';

const { RNI18n } = NativeModules;
const locale = (RNI18n) ? RNI18n.locale.replace(/_/, '-') : '';

/**
 * returns the language setted on user's phone
 */
export const userPhoneLanguage = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => locale,
  cacheUserLanguage: Function.prototype,
};
