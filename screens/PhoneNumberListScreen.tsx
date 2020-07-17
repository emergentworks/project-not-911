import * as React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';

import { PhoneScreenNavigationProp } from '../types';
import { EditScreenInfo, Text, View } from '../components';
import { PhoneNumbers } from '../constants';
import { Styles } from '../constants';

type SectionsUnion = keyof typeof PhoneNumbers;
type Props = {
  navigation: PhoneScreenNavigationProp,
  route: {
    params: {
      section: SectionsUnion,
      title: string,
    },
  },
};

export const PhoneNumberListScreen = (props: Props) => {
  const {route} = props;
  const numbers = PhoneNumbers[route.params.section];

  return (
    <View style={styles.container}>
      <Text style={[styles.hours, styles.bold]}>
        24 Hour Access
      </Text>
      <ScrollView>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i} style={styles.container}>
              <Text style={[styles.bold, styles.title]}>
                {entry.display}
                </Text>
              <TouchableOpacity style={styles.phoneWrap}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
            <Image
        source={require('../assets/images/phone.svg')}
        style={styles.phone}
        />
              </TouchableOpacity>
              <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '80%',
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
    color: 'red',
    paddingTop: 20,
    paddingBottom: 20,
  },
  phoneWrap: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    // marginBottom: 25,
    borderRadius: 1000,
    padding: 10,
  },
});
