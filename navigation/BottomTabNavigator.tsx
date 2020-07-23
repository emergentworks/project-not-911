import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components';
import { Styles } from '../constants';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { About, Home, Not911 } from '../svgs';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Styles[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <Home color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <About color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={{
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Text style={styles.bold}>
                NOT 911
              </Text>
              {/* <Not911 /> */}
            </View>
          ),
          headerStyle: {
            backgroundColor: colorScheme === 'light' ? Styles.white : Styles.black,
            borderBottomColor: colorScheme === 'light' ? Styles.white : Styles.black,
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
  const colorScheme = useColorScheme();

  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: () => (
            <View style={{
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Text style={styles.bold}>
                NOT 911
              </Text>
              {/* <Not911 /> */}
            </View>
          ),
          headerStyle: {
            backgroundColor: colorScheme === 'light' ? Styles.white : Styles.black,
            borderBottomColor: colorScheme === 'light' ? Styles.white : Styles.black,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
