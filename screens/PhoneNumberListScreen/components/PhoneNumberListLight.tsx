import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../../../components';
import { PhoneWhite } from '../../../svgs';
import { ComponentProps } from '../types';
import { Styles } from '../../../constants';

export const PhoneNumberListLight = (props: ComponentProps) => {
  const {numbers} = props;

  return (
    <View
      lightColor={Styles.white}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i}>
              <Text
                style={[
                  styles.hours,
                  styles.bold,
                  styles.centerTxt,
                  entry.crisis && {color: Styles.orange},
                ]}>
                {entry.hours}
              </Text>
              <Text style={[styles.bold, styles.centerTxt, styles.title]}>
                {entry.display}
              </Text>
              <Text style={[styles.centerTxt, styles.tel]}>
                {entry.tel}
              </Text>
              <TouchableOpacity
                style={[
                  styles.phoneWrap,
                  entry.crisis && {backgroundColor: Styles.orange}
                ]}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                <PhoneWhite />
              </TouchableOpacity>
              <View
                style={styles.separator}
                lightColor="#cfcfcf"
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
    color: Styles.black,
    fontSize: 24,
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
  bold: {
    fontWeight: '600',
  },
  marginBottom30: {
    marginBottom: 30,
  },
  hours: {
    color: Styles.blue,
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
    padding: 17,
    width: 70,
  },
  tel: {
    color: Styles.black,
    marginBottom: 15,
  },
});
