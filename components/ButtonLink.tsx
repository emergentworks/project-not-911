import React, { memo } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native';

import { Styles } from '../constants';
import { Text, View } from './Themed';

type Props = {
  navigation: any,
  route: {
    btn: {
      display: string,
      src: ImageSourcePropType,
    },
    params: object,
  },
}

export const ButtonLink = memo((props: Props) => {
  // @ts-ignore
  const iconSize = styles[props.route.btn.display];

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate(
        'PhoneNumberListScreen',
        props.route.params,
      )}>
      <View style={[styles.marginRight10, styles.imgWrap]}>
        <Image
          source={props.route.btn.src}
          style={iconSize}
        />
      </View>
      <Text style={styles.buttonText}>
        {props.route.btn.display}
      </Text>
      <Image
        source={require('../assets/images/caret.svg')}
        style={styles.caret}
      />
    </TouchableOpacity>
  );
});

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
  buttonText: {
    color: Styles.blue,
    fontSize: 20,
    lineHeight: 20,
    width: '100%',
  },
  caret: {
    height: 14,
    width: 7,
  },
  imgWrap: {
    maxWidth: 35,
    minWidth: 35,
  },
  marginRight10: {
    marginRight: 10,
  },
  Violence: {
    height: 34,
    width: 22,
  },
  Legal: {
    height: 34,
    width: 22,
  },
  'Hate Crimes': {
    height: 34,
    width: 22,
  },
  Homelessness: {
    height: 34,
    width: 22,
  },
  'Mental Health': {
    height: 36,
    width: 29,
  },
  'Immigration Support': {
    height: 34,
    width: 22,
  },
  'Drugs or Poisoning': {
    height: 34,
    width: 22,
  },
  'Noise': {
    height: 28,
    width: 20,
  },
});
