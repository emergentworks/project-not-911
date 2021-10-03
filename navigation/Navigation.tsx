import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import { BottomTabNavigator } from './BottomTabNavigator';
import { LinkingConfiguration } from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
type tNavProps = { colorScheme: ColorSchemeName };
export const Navigation = ({ colorScheme }: tNavProps) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
    <BottomTabNavigator />
  </NavigationContainer>
);
