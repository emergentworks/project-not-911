import React, { memo } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Styles } from '../constants';
import { Text, View } from './Themed';

type Props = {
  navigation: any,
  route: {
    btn: {
      display: string,
      icon: string,
    },
    params: object,
  },
}

export const ButtonLink = memo((props: Props) => {
  // @ts-ignore
  const iconSize = styles[props.route.btn.icon];

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate(
        'PhoneNumberListScreen',
        props.route.params,
      )}>
      <View style={styles.imgWrap}>
        <Image
          source={require(`../assets/images/${props.route.btn.icon || 'poison'}.svg`)}
          style={[styles.marginRight10, iconSize]}
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
  mentalhealth: {
    height: 36,
    width: 29,
  },
  poison: {
    height: 34,
    width: 21,
  },
  noise: {
    height: 28,
    width: 20,
  },
});
