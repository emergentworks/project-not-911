import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Styles } from '../constants';
import {
  Caret,
  DrugsOrPoisoning,
  Homelessness,
  LegalSupport,
  MentalHealth,
  Violence,
} from '../svgs';
import { Text, View } from './Themed';

type Props = {
  includeIcon?: true,
  isLast?: boolean,
  navigation: any,
  city?: string,
  saveLocation?: Function,
  to: 'CategoryScreen' | 'PhoneNumberListScreen',
  category: string,
};

/**
 * @description Generic category link. optional icon
 */
export const CategoryLink = memo((props: Props) => {
  const { isLast, category } = props;
  const section = category.toLowerCase().replaceAll(' ', '');

  return (
    <>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          props.navigation.navigate(
            props.to,
            { section },
          );
        }}>
        {props.includeIcon && (
          <View
            lightColor={Styles.white}
            darkColor={Styles.blue}
            style={styles.marginRight10}>
            {category === 'Violence'
              && (
                <Violence />
              )}
            {category === 'Mental Health'
              && (
                <MentalHealth />
              )}
            {category === 'Homelessness'
              && (
                <Homelessness />
              )}
            {category === 'Legal Support'
              && (
                <LegalSupport />
              )}
            {category === 'Drugs or Poisoning'
              && (
                <DrugsOrPoisoning />
              )}
          </View>
        )}
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={styles.text}>
          {category}
        </Text>
        <Caret />
      </TouchableOpacity>
      {!isLast && (
        <View
          style={Styles.separator}
          lightColor={Styles.gray}
          darkColor={Styles.white}
        />
      )}
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
