import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { Styles } from '../constants';
import { Text } from './Themed';
import {
  CaretBlue,
  Homelessness,
  Legal,
  MentalHealth,
  Poison,
  Violence,
} from '../svgs';

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
      {props.route.btn.display === 'Legal Support'
        && (
          <Legal />
        )}
      {props.route.btn.display === 'Drugs or Poisoning'
        && (
          <Poison />
        )}
    </View>
    <Text style={styles.btnText}>
      {props.route.btn.display}
    </Text>
    <CaretBlue />
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Styles.white,
    borderRadius: 4,
    display: 'flex',
    height: 85,
    flexDirection: 'row',
    marginBottom: 8,
    maxHeight: 85,
    padding: 25,
    width: '100%',
  },
  btnText: {
    color: Styles.blue,
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  marginRight10: {
    marginRight: 10,
  },
});
