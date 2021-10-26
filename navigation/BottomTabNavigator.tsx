import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { HeaderTitle } from '../components';
import { Styles } from '../constants';
import { useTheme } from '../context';
import { About, Home, Settings } from '../svgs';
import { AboutStackNavigator, HomeStackNavigator, SettingsStackNavigator } from './StackNavigators';

const BottomTab = createBottomTabNavigator();

/**
 * @description This component renders the bottom navigation for the home/about pages
 */
export const BottomTabNavigator = () => {
  const theme: { mode: 'light' | 'dark' } = useTheme();
  const { mode } = theme;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Styles[mode].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name="About"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <About color={color} />,
          title: 'About',
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Settings color={color} />,
          title: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  );
};


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerTitle: () => <HeaderTitle />,
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

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          headerTitle: () => <HeaderTitle />,
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

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();

  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          headerTitle: () => <HeaderTitle />,
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
