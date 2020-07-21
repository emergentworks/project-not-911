import * as React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../../../components';
import { PhoneWhite } from '../../../svgs';
import { ComponentProps } from '../types';

export const PhoneNumberListDark = (props: ComponentProps) => {
  const {numbers} = props;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i} style={styles.container}>
              <Text style={[styles.bold, styles.title]}>
                {entry.display}
              </Text>
              <TouchableOpacity
                style={styles.phoneWrap}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                <PhoneWhite />
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
    borderRadius: 1000,
    padding: 10,
  },
});
