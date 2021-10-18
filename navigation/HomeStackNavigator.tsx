import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {
  CategoryScreen,
  CitySelectScreen,
  NotFoundScreen,
  PhoneNumberListScreen,
} from '../screens';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<any>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CitySelectScreen" component={CitySelectScreen} />
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    <Stack.Screen name="PhoneNumberListScreen" component={PhoneNumberListScreen} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  </Stack.Navigator>
);
