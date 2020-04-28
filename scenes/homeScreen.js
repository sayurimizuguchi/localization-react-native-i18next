import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { LocaleText } from '../components/text.component';

export const Home = () => (
  <View style={appStyle.rootView}>
    <LocaleText keyText="appName" />
    <TouchableOpacity title="change">
      <LocaleText keyText="hello" style={appStyle.helloView} />
    </TouchableOpacity>
  </View>
);

const appStyle = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloView: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'purple',
  },
});
