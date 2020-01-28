/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import App from './App';
import { name as appName } from './app.json';
import { languageDetector } from './utils/localize.utils'


import { i18nextOptions } from './utils/localize.utils'

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init(i18nextOptions);


AppRegistry.registerComponent(appName, () => App);
