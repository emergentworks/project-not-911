import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';

import { Styles } from '../constants';
import { useTheme } from '../context';
import { AboutScreen } from '../screens/AboutScreen';
import { CitySelectScreen } from '../screens/CitySelectScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { About, Home, Logo, Settings } from '../svgs';
import {
  BottomTabParamList,
  TabOneParamList,
  TabThreeParamList,
  TabTwoParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

/**
 * @description This component renders the bottom navigation for the home/about pages
 */
export default function BottomTabNavigator() {
  const theme: { mode: 'light' | 'dark' } = useTheme();
  const { mode } = theme;

  return (
    <BottomTab.Navigator
      initialRouteName="CitySelect"
      tabBarOptions={{ activeTintColor: Styles[mode].tint }}>
      <BottomTab.Screen
        name="CitySelect"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <About color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="CitySelectScreen"
        component={CitySelectScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Logo />
            </View>
          ),
          headerStyle: {
            backgroundColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Logo />
            </View>
          ),
          headerStyle: {
            backgroundColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Logo />
            </View>
          ),
          headerStyle: {
            backgroundColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomColor: mode === 'light' ? Styles.white : Styles.black,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
    </TabThreeStack.Navigator>
  );
}
