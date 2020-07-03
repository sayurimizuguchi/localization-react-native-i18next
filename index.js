import { AppRegistry } from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';

import App from './App';
import { name as appName } from './app.json';
import { i18nextOptions } from './src/services/localization/localize.utils';

// identifying language when opening the app
i18next
  .use(i18nextReactNative)
  .use(initReactI18next)
  .init(i18nextOptions);


AppRegistry.registerComponent(appName, () => App);

export default i18next;
