import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../constants';
import { Text } from './Themed';

export const ButtonLink = memo((props: any) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.navigation.navigate(
      'PhoneNumberListScreen',
      props.route.params,
    )}>
    <Text style={styles.buttonText}>
      {props.route.display}
    </Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    marginBottom: 8,
    padding: 25,
    width: '100%',
  },
  buttonText: {
    color: Colors.black,
    fontSize: 20,
    lineHeight: 20,
  },
});
