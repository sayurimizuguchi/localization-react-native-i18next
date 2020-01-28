import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TextComponent } from './components/text.component';
import { i18nextOptions } from './utils/localize.utils'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init(i18nextOptions);

const App = () => {
  return (
    <View style={appStyle.rootView}>
      <TextComponent keyText={'appName'} />
			<TouchableOpacity title={'change'}>
			  <TextComponent keyText={'hello'} style={appStyle.helloView} />
			</TouchableOpacity>
    </View>
  );
}

const appStyle = StyleSheet.create({
  rootView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	helloView: {
		justifyContent: 'center',
		alignItems: 'center',
		color: 'purple',
  },
});

export default App;
