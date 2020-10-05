import Constants from 'expo-constants';
import React, { memo, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Switch } from 'react-native';

import { Text, View } from '../components';
import { Styles } from '../constants';
import { useTheme } from '../context';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerView}>
          <View style={[styles.row, styles.section]}>
            <Text style={[styles.bold, {marginRight: 10}]}>
              Toggle Dark Mode
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          {Constants?.platform?.web && (
            <>
              <View
                style={[Styles.separator, styles.marginVertical]}
                lightColor={Styles.gray}
                darkColor={Styles.white}
              />
              <View style={styles.section}>
                <Text style={[styles.bold, styles.text]}>
                  How to install this web app on your phone or browser
                </Text>
                <Text style={styles.text}>
                  Add to Home Screen (A2HS) is a web app feature that allows you to install this site on your phone as a mobile app.
                </Text>
                <Text style={styles.text}>
                  This will allow you to launch Not911 from your home screen and enables it to work offline.
                </Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.bold, styles.text]}>
                  iOS Safari
                </Text>
                <Text style={styles.text}>
                  Click the share button on the bottom middle of your screen. Then click &apos;Add to Home Screen&apos;. You might have to scroll a little. You should now be able to launch Not911 from your home screen.
                </Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.bold, styles.text]}>
                  Android
                </Text>
                <Text style={styles.text}>
                  If Firefox: Click the home icon (the one with a + in it) that should be next to the url.
                </Text>
                <Text style={styles.text}>
                  If Chrome: Click the 3 dots menu button in the top right of your screen, then click &apos;Add to Home screen&apos;. You should now be able to launch Not911 from your home screen.
                </Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.bold, styles.text]}>
                  Chrome
                </Text>
                <Text style={styles.text}>
                  Click the 3 dots menu button in the top right of your screen, then click &apos;Install Not911&apos;. You should now be able to launch Not911 from your Chrome apps menu.
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  innerView: {
    minHeight: Dimensions.get('window').height,
    padding: 20,
    paddingBottom: 50,
  },
  section: {
    display: 'flex',
    paddingVertical: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    marginBottom: 10,
  },
});
