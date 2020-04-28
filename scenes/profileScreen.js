import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';
import { LocaleText } from '../components/text.component';

export const Profile = () => (
  <View style={appStyle.rootView}>
    <LocaleText keyText="profileScene.title" style={appStyle.title} />
    <ImageBackground
      style={appStyle.backgroundImage}
      resizeMode="cover"
      source={{ uri: 'https://res.cloudinary.com/rangle/image/upload/w_700/rangle.io/favicon-largest.png' }}
    />
    <TouchableOpacity onPress={() => {}}>
      <LocaleText keyText="profileScene.name" style={appStyle.helloView} />
    </TouchableOpacity>
  </View>
);

const appStyle = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  helloView: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'purple',
  },
});
