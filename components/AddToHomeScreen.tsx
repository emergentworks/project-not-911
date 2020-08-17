import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Styles } from '../constants';
import { View, Text } from '../components/Themed';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;

  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent;

/**
 * @description Allows user to add web app to their phone home screen, regardless of OS
 */
export class AddToHomeScreen extends React.PureComponent<any> {
  state = {
    showInstallPrompt: false,
  };

  constructor(props: any) {
    super(props);

    // unfortunately, we have no control over this event.
    // it will fire only if certain conditions are met, which vary
    // one of which is time spent on site - which means it likely won't show
    // but it's the easiest way to trigger the PWA install flow
    window.addEventListener('beforeinstallprompt', ev => {
      // needed to prevent old browsers from auto showing the install prompt
      ev.preventDefault();

      // stash the event so it can be triggered later on click
      deferredPrompt = ev as BeforeInstallPromptEvent;

      this.setState({
        showInstallPrompt: true,
      });
    });
  }


  render() {
    if (!this.state.showInstallPrompt) return null;
    if (!Constants?.platform?.web) return null;

    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          deferredPrompt.prompt();
        }}>
        <View
          lightColor="#555"
          darkColor="#555"
          style={styles.btn}>
          <Text
            lightColor={Styles.white}
            darkColor={Styles.white}
            style={styles.text}>
            Add to Home Screen
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    bottom: 50,
    left: 0,
    right: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 99,
  },
  btn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 14,
    width: '100%',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
});
