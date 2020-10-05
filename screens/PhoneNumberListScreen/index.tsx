import * as Linking from 'expo-linking';
import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components';
import { PhoneNumbers } from '../../constants';
import { Styles } from '../../constants';
import { Caret, Phone } from '../../svgs';
import { Props } from './types';

/**
 * @description This component renders the PhoneNumber Screen
 * ie, any phone number list we pass into it basically
 */
export const PhoneNumberListScreen = (props: Props) => {
  const {route} = props;
  const numbers = PhoneNumbers[route.params.section];

  if (!(numbers instanceof Array)) return null;

  // lets always have 'crisis' hotlines at the top
  // crisis meaning, mental health breakdowns, etc, but not an 'emergency'
  // wherein someone is currently in physical danger
  const sortedNumbers = numbers.sort(entry => {
    if (entry.crisis) return -1;
    return 1;
  });

  return (
    <View
      darkColor={Styles.black}
      lightColor={Styles.white}
      style={styles.container}>
      <View
        darkColor={Styles.black}
        lightColor={Styles.white}
        style={styles.backBtn}>
        <Caret style={styles.rotate} />
        <Text
          bold
          darkColor={Styles.white}
          lightColor={Styles.blue}
          onPress={() => props.navigation.navigate('Root')}>
          Back
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sortedNumbers.map((entry: any, i) => (
          <View
            key={i}
            darkColor="#000"
            lightColor={Styles.white}
            style={styles.item}>
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
                entry.crisis && {backgroundColor: Styles.orange},
              ]}
              onPress={() => {
                Linking.openURL(`tel://${entry.tel}`);
              }}>
              <Phone color={Styles.white} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  rotate: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }],
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  centerTxt: {
    textAlign: 'center',
  },
  item: {
    marginBottom: 30,
    paddingBottom: 30,
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
