import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Styles } from '../constants';
import { View, Text } from '../components/Themed';


let deferredPrompt: Event;

/**
 * @description Allows user to add web app to their phone home screen, regardless of OS
 */
export class AddToHomeScreen extends React.Component<any> {
  state = {
    showInstallPrompt: false,
  };

  constructor(props: any) {
    super(props);

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      this.state = {
        showInstallPrompt: true,// !isInStandaloneMode,
      };
      // showInstallPromotion();
    });
  }


  render() {
    // if (!this.state.showInstallPrompt) return null;
    if (!Constants?.platform?.web) return null;

    return (
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          deferredPrompt.prompt();
        }}>
        <View style={styles.btn}>
          <Text style={styles.text}>
            Add to Home screen
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 25,
    width: '100%',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
});
