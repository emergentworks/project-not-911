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
    showInstallPrompt: true,
  };

  constructor(props: any) {
    super(props);

    window.addEventListener('beforeinstallprompt', ev => {
      console.log('beforeinstallprompt in component called');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      ev.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt = ev as BeforeInstallPromptEvent;

      this.setState({
        showInstallPrompt: true,
      });

      // this.btnRef.addEventListener('click', (e) => {
      //   // hide our user interface that shows our A2HS button
      //   addBtn.style.display = 'none';
      //   // Show the prompt
      //   deferredPrompt.prompt();
      //   // Wait for the user to respond to the prompt
      //   deferredPrompt.userChoice.then((choiceResult) => {
      //       if (choiceResult.outcome === 'accepted') {
      //         console.log('User accepted the A2HS prompt');
      //       } else {
      //         console.log('User dismissed the A2HS prompt');
      //       }
      //       deferredPrompt = null;
      //     });
      // });
    });
  }


  render() {
    // if (!this.state.showInstallPrompt) return null;
    if (!Constants?.platform?.web) return null;

    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          console.log('add to home screen clicked');
          // @ts-ignore
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
            Add to Home screen
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
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
