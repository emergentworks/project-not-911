import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from './Themed';

export const ButtonLink = memo((props: any) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.navigation.navigate(props.to)}>
    <Text style={styles.buttonText}>
      {props.title}
    </Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    width: '80%',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
