import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { Colors } from '../constants';
import { ButtonLink } from '../components';
import { Routes } from '../constants';

export default function TabOneScreen(props: any) {
  console.log('process.env => ', process.env);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerView}>
          <Text style={styles.title}>
            What is the nature of your emergency?
          </Text>
          {Routes.map((route, i) => (
            <ButtonLink
              key={i}
              navigation={props.navigation}
              route={route}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
    fontFamily: 'system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    marginTop: Constants.statusBarHeight,
  },
  innerView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: 16,
    textAlign: 'center',
  },
});
