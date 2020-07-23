import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { PhoneNumbers } from '../../constants';
import { Text, View } from '../../components';
import { PhoneWhite } from '../../svgs';
import { Props } from './types';
import { Styles } from '../../constants';

export const PhoneNumberListScreen = (props: Props) => {
  const {route} = props;
  const numbers = PhoneNumbers[route.params.section];

  return (
    <View
      darkColor="#000"
      lightColor={Styles.white}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View
              darkColor="#000"
              lightColor={Styles.white}
              key={i}>
              <Text
                bold
                darkColor={Styles.white}
                lightColor={Styles.blue}
                style={[
                  styles.hours,
                  styles.centerTxt,
                  entry.crisis && {color: Styles.orange},
                ]}>
                {entry.hours}
              </Text>
              <Text
                bold
                darkColor={Styles.white}
                style={[styles.centerTxt, styles.title]}>
                {entry.display}
              </Text>
              <Text
                darkColor={Styles.white}
                style={[styles.centerTxt, styles.tel]}>
                {entry.tel}
              </Text>
              <TouchableOpacity
                style={[
                  styles.phoneWrap,
                  entry.crisis && {backgroundColor: Styles.orange}
                ]}
                onPress={() => {
                  Linking.openURL(`tel://${entry.tel}`);
                }}>
                <PhoneWhite />
              </TouchableOpacity>
              <View
                style={styles.separator}
                lightColor="#cfcfcf"
                darkColor="#000"
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  centerTxt: {
    textAlign: 'center',
  },
  paddingTop30: {
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  separator: {
    height: 1,
    marginHorizontal: 'auto',
    marginVertical: 30,
    width: '80%',
  },
  phone: {
    height: 30,
    width: 30,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  hours: {
    fontSize: 18,
    paddingBottom: 5,
  },
  phoneWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Styles.blue,
    borderRadius: 1000,
    flex: 1,
    height: 70,
    justifyContent: 'center',
    padding: 20,
    width: 70,
  },
  tel: {
    marginBottom: 15,
  },
});
