import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';

import { LocaleText } from '../components/text.component';
import { changeLanguage, currentLanguage, resources } from '../services/localization/localize.utils';

export const Home = () => {
  const [count, setCount] = useState(0);
  const [myLanguage, setAppLanguage] = useState(currentLanguage);

  const handleLanguage = (language) => () => {
    setAppLanguage(language);
    changeLanguage(language);
    setCount(count + 1);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <LocaleText keyText="languageSettings" style={home.languageSettings} />

      {Object.keys(resources).map((item) => (
        <View key={item}>
          <TouchableOpacity
            style={home.itemStyle}
            onPress={handleLanguage(item)}
          >
            <LocaleText keyText={`languages.${item}`} style={{ fontSize: 16 }} />
            {myLanguage === item ? (
              <Text style={{ marginLeft: 30 }}>√</Text>
            ) : null}
          </TouchableOpacity>
        </View>
      ))}
      <View elevation={10} style={home.blueBox}>
        <LocaleText keyText="interpolationExample" interpolation={{ count }} style={home.counter} />
      </View>
      {count >= 10
       && (
       <View elevation={10} style={home.redBox}>
         <LocaleText keyText="please" interpolation={{ count }} style={home.counter} />
       </View>
       )}
    </View>
  );
};

const home = StyleSheet.create({
  languageSettings: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  itemStyle: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontSize: 12,
    textAlign: 'center',
  },
  blueBox: {
    padding: 30,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#c4e6ff',
  },
  redBox: {
    padding: 30,
    fontSize: 15,
    textAlign: 'center',
	marginBottom: 30,
	marginHorizontal: 30,
	borderWidth: 2,
	borderColor: 'red',
	borderRadius: 30,
	shadowRadius: 5,
	shadowOpacity: 1.0,
	backgroundColor: '#c4e6ff',
  }
});
