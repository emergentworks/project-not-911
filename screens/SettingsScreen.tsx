import React, { memo, useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

// import * as Linking from 'expo-linking';

import { useTheme } from '../context';
import { Text, View } from '../components';
import { Styles } from '../constants';
// import { Cross, Hand } from '../svgs';

/**
 * @description This component is for adjusting user settings, such as theme
 */
export const SettingsScreen = memo(() => {
  const {mode, toggle} = useTheme();
  const [isEnabled, setIsEnabled] = useState(mode === 'dark');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggle();
  };

  return (
    <View
      lightColor={Styles.white}
      darkColor={Styles.blue}
      style={styles.container}>
      <View style={styles.row}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>
          Toggle Dark Mode
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {Constants?.platform?.web && (
        <>
          <View
            style={Styles.separator}
            lightColor={Styles.gray}
            darkColor={Styles.white}
          />
          <View style={styles.row}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>
              Add to Home Screen
            </Text>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>
              A2HS is a web app feature that allows you to install this site on your phone as a mobile app. This will allow you to launch Not911 from your home screen and enables it to work offline.
            </Text>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>
              Below are instructions on how to install this app manually if the install banner doesn&apos;t appear for you.
            </Text>
          </View>
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    padding: 20,
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10,
  },
  marginRight: {
    marginRight: 15,
  },
});
