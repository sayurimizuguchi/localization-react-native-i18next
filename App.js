import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { translate } from './utils/localize.utils';
import { Home } from './scenes/homeScreen';
import { Profile } from './scenes/profileScreen';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={translate('navigationBar.home')} component={Home} />
      <Tab.Screen name={translate('navigationBar.profile')} component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
