import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {
  AboutScreen,
  CategoryScreen,
  CitySelectScreen,
  NotFoundScreen,
  PhoneNumberListScreen,
  SettingsScreen,
} from '../screens';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const HStack = createStackNavigator();
export const HomeStackNavigator = () => (
  <HStack.Navigator screenOptions={{ headerShown: false }}>
    <HStack.Screen
      name="city"
      component={CitySelectScreen}
      options={{ title: 'City Select' }}
    />
    <HStack.Screen
      name="category"
      component={CategoryScreen}
      options={{ title: 'Category Select' }}
    />
    <HStack.Screen
      name="numbers"
      component={PhoneNumberListScreen}
      options={{ title: 'Hotlines' }}
    />
  </HStack.Navigator>
);

const AStack = createStackNavigator();
export const AboutStackNavigator = () => (
  <AStack.Navigator screenOptions={{ headerShown: false }}>
    <AStack.Screen
      name="about"
      component={AboutScreen}
    />
  </AStack.Navigator>
);

const SetStack = createStackNavigator();
export const SettingsStackNavigator = () => (
  <SetStack.Navigator screenOptions={{ headerShown: false }}>
    <SetStack.Screen
      name="settings"
      component={SettingsScreen}
    />
  </SetStack.Navigator>
);

