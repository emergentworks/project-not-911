import * as React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../../../components';
import { PhoneWhite, PhoneBlue, PhoneOrange, CaretWhite } from '../../../svgs';
import { ComponentProps } from '../types';
import { Styles } from '../../../constants';

export const PhoneNumberListLight = (props: ComponentProps) => {
  const {numbers} = props;
console.log('light')
  return (
    <View
      lightColor={Styles.white}
      style={[styles.container, styles.paddingTop30]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i} style={styles.container}>
              <Text style={[styles.hours && styles.hours,
              styles.bold,
              entry.crisis && {color: Styles.red}]}>
                {entry.hours}
              </Text>
              <Text style={[styles.bold, styles.title]}>
                {entry.display}
              </Text>
              <Text style={styles.tel}>
                {entry.tel}
              </Text>
              <TouchableOpacity
                style={[styles.phoneWrap, entry.crisis && {backgroundColor: Styles.red}]}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                <PhoneWhite />
              </TouchableOpacity>
                <View
                  style={styles.separator}
                  lightColor="#eee"
                  darkColor="#CFCFCF"
                />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: Styles.white,
  },
  paddingTop30: {
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    width: '80%',
    paddingBottom: 10,
    color: Styles.black,
  },
  separator: {
    height: 1,
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
    height: 50,
    width: 50,
    backgroundColor: Styles.blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 1000,
    padding: 10,
  },
  crisis: {
    padding: 30,
    backgroundColor: Styles.red,
    borderRadius: 10,
    marginBottom: 30,
  },
  tel: {
    color: Styles.black,
  },
});
