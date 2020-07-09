import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<any>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="ViolenceScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="MentalHealthCrisisScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="HomelessnessScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="NoiseNuisancesScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="HateCrimeScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="SubstanceAbuseScreen"
        component={PhoneNumberScreen}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
