import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../../../components';
import { PhoneBlue, PhoneOrange } from '../../../svgs';
import { ComponentProps } from '../types';
import { Styles } from '../../../constants';

export const PhoneNumberListDark = (props: ComponentProps) => {
  const {numbers} = props;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={[{height: screenHeight}, styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View
              key={i}
              style={[entry.crisis && styles.crisis]}>
              <Text style={[styles.hours, styles.bold, styles.centerTxt]}>
                {entry.hours}
              </Text>
              <Text style={[styles.bold, styles.title, styles.centerTxt]}>
                {entry.display}
              </Text>
              <Text style={[styles.centerTxt, styles.marginBottom25]}>
                {entry.tel}
              </Text>
              <TouchableOpacity
                style={[styles.phoneWrap, i === numbers.length - 1 && styles.marginBottom25]}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                {entry.crisis ? <PhoneOrange /> : <PhoneBlue />}
              </TouchableOpacity>
              {i !== numbers.length - 1 && !entry.crisis && (
                <View
                  style={styles.separator}
                  darkColor={Styles.white}
                />
              )}
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
  scrollView: {
    alignSelf: 'center',
    display: 'flex',
    width: '90%',
  },
  centerTxt: {
    textAlign: 'center',
  },
  marginBottom25: {
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 'auto',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    marginHorizontal: 'auto',
    marginVertical: 30,
    width: '100%',
  },
  bold: {
    fontWeight: '600',
  },
  marginBottom30: {
    marginBottom: 30,
  },
  hours: {
    color: Styles.white,
    paddingBottom: 5,
  },
  phone: {
    height: 35,
    width: 35,
  },
  phoneWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Styles.white,
    borderRadius: 1000,
    flex: 1,
    height: 70,
    justifyContent: 'center',
    padding: 17,
    width: 70,
  },
  crisis: {
    backgroundColor: Styles.orange,
    borderRadius: 10,
    display: 'flex',
    marginBottom: 30,
    padding: 30,
    width: '100%',
  },
});
