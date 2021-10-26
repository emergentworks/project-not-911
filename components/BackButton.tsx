import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Styles } from '../constants';
import { Caret } from '../svgs';
import { Text, View } from './Themed';

/**
 * @description This component renders the Back Button on all screens
 *
*/

export const BackButton = (props: { darkColor?: 'blue' | 'black' }) => {
  const { darkColor = 'blue' } = props;
  const navigation = useNavigation();

  return (
    <View
      darkColor={Styles[darkColor]}
      lightColor={Styles.white}
      style={styles.backBtn}>
      <Text
        bold
        darkColor={Styles.white}
        lightColor={Styles.blue}
        onPress={() => navigation.goBack()}
        style={styles.innerBtn}>
        <Caret style={styles.rotate} />
        Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 24,
    paddingBottom: 16,
    paddingRight: 24,
    width: 80,
  },
  innerBtn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  rotate: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }],
  },
});
