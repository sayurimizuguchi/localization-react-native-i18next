import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { TextComponent } from './components/text.component';

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
