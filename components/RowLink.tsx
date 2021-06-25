import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { Styles } from '../constants';
// import { CitySelectScreen }  from '../screens/CitySelectScreen';
import {
  Caret,
  Homelessness,
  Legal,
  MentalHealth,
  Poison,
  Violence,
  NewYorkCity,
  SanFrancisco,
} from '../svgs';

type Props = {
  includeIcon?: true,
  isLast?: boolean,
  navigation: any,
  city?: string,
  to: "HomeScreen" | "PhoneNumberListScreen",
  route: {
    btn: {
      display: string,
    },
    params: object,
  },
};

/**
 * @description Generic category link. optional icon
 */
export const RowLink = memo((props: Props) => {
  const { isLast, route } = props;
  console.log('RowLinkProps', props);

  return (
    <>
      <TouchableOpacity
        style={styles.row}
        onPress={() => props.navigation.navigate(
          props.to,
          {...route.params, city:props.city},
        )}>
        {props.includeIcon && (
          <View
            lightColor={Styles.white}
            darkColor={Styles.blue}
            style={styles.marginRight10}>
              {props.route.btn.display === 'New York City'
              && (
                <NewYorkCity />
              )}
              {props.route.btn.display === 'San Francisco Bay Area'
              && (
                <SanFrancisco />
              )}
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
        )}
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={styles.text}>
          {route.btn.display}
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
