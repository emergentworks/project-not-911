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
      <Stack.Screen name="ViolenceScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Violence Hotlines"
          />
        )}
      </Stack.Screen>
            <Stack.Screen name="HateCrimeScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Hate Crime Hotlines"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="HomelessnessScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Homelessness Hotlines"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="MentalHealthCrisisScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Mental Health Crisis Hotlines"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="NoiseNuisancesScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Noise and/or Nuisances Hotlines"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SubstanceAbuseScreen">
        {routeProps => (
          <PhoneNumberScreen
            {... routeProps}
            title="Substance Abuse Hotlines"
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
