import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

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
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View
        darkColor={Styles[darkColor]}
        lightColor={Styles.white}
        style={styles.backBtn}>
        <Caret style={styles.caret} />
        <Text
          bold
          darkColor={Styles.white}
          lightColor={Styles.blue}>
          Back
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 24,
    paddingBottom: 16,
    paddingRight: 24,
    width: 80,
  },
  caret: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }],
  },
});
