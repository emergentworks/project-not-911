import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Styles } from '../constants';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from '../components/Themed';
import {
  CaretBlue,
  CaretWhite,
  Homelessness,
  MentalHealth,
  Noise,
  Poison,
  Violence,
} from '../svgs';

type Props = {
  includeIcon?: true,
  navigation: any,
  route: {
    btn: {
      display: string,
    },
    params: object,
  },
};

export const RowLink = memo((props: Props) => {
  const { route } = props;
  const colorScheme = useColorScheme();

  return (
    <>
      <TouchableOpacity
        style={styles.row}
        onPress={() => props.navigation.navigate(
          'PhoneNumberListScreen',
          route.params,
        )}>
        {props.includeIcon && (
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
        )}
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={styles.text}>
          {route.btn.display}
        </Text>
        {colorScheme === 'light' ? <CaretBlue /> : <CaretWhite />}
      </TouchableOpacity>
      <View
        style={Styles.separator}
        lightColor={Styles.blue}
        darkColor={Styles.white}
      />
    </>
  );
});

const styles = StyleSheet.create({
  marginRight10: {
    marginRight: 10,
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 25,
    width: '100%',
  },
  text: {
    flex: 1,
    fontSize: 20,
    lineHeight: 20,
  },
});
