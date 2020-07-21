import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { Styles } from '../constants';
import { Text } from './Themed';
import { Caret, Homelessness, MentalHealth, Noise, Poison, Violence } from '../svgs';

type Props = {
  navigation: any,
  route: {
    btn: {
      display: string,
    },
    params: object,
  },
};

export const ButtonLink = memo((props: Props) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.navigation.navigate(
      'PhoneNumberListScreen',
      props.route.params,
    )}>
    <View style={styles.marginRight10}>
      {props.route.btn.display === 'Violence'
        && (
          <Violence />
        )}
      {props.route.btn.display === 'Mental Health'
        && (
          <MentalHealth />
        )}
      {props.route.btn.display === 'Homelessness'
        && (
          <Homelessness />
        )}
      {props.route.btn.display === 'Noise'
        && (
          <Noise />
        )}
      {props.route.btn.display === 'Drugs or Poisoning'
        && (
          <Poison />
        )}
    </View>
    <Text style={styles.btnText}>
      {props.route.btn.display}
    </Text>
    <Caret />
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Styles.white,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
    padding: 25,
    width: '100%',
  },
  btnText: {
    color: Styles.blue,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    width: '100%',
  },
  marginRight10: {
    marginRight: 10,
  },
});
