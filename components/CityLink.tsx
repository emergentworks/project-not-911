import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import { Styles } from '../constants';
import {
  Caret,
} from '../svgs';

type Props = {
  includeIcon?: true,
  isLast?: boolean,
  navigation: any,
  city?: string,
  saveLocation?: Function,
  to: "CategoryScreen" | "PhoneNumberListScreen",
  route: string,
};

/**
 * @description Generic category link. optional icon
 */
export const CityLink = memo((props: Props) => {
  const { isLast, route } = props;

  return (
    <>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          if (props.saveLocation) {
            props.saveLocation(route)
          }
          props.navigation.navigate(
            props.to,
            { location: route }
          );
        }}>
        {props.includeIcon && (
          <View
            lightColor={Styles.white}
            darkColor={Styles.blue}
            style={styles.marginRight10}>
          </View>
        )}
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={styles.text}>
          {route}
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
