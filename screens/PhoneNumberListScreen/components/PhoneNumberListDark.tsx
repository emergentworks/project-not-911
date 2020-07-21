import * as React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../../../components';
import { PhoneWhite, PhoneBlue, PhoneOrange } from '../../../svgs';
import { ComponentProps } from '../types';
import { Styles } from '../../../constants';

export const PhoneNumberListDark = (props: ComponentProps) => {
  const {numbers} = props;

  return (
    <View style={[styles.container, styles.paddingTop30]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i} style={[styles.container, entry.crisis && styles.crisis]}>
              <Text style={[styles.hours, styles.bold]}>
                {entry.hours}
              </Text>
              <Text style={[styles.bold, styles.title]}>
                {entry.display}
              </Text>
              <Text>
                {entry.tel}
              </Text>
              <TouchableOpacity
                style={styles.phoneWrap}
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                {entry.crisis ? <PhoneOrange /> : <PhoneBlue />}
              </TouchableOpacity>
              {!entry.crisis && (
                <View
                  style={styles.separator}
                  lightColor="#eee"
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  paddingTop30: {
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    width: '80%',
    paddingBottom: 10,
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
    color: Styles.white,
    paddingBottom: 5,
  },
  phoneWrap: {
    height: 50,
    width: 50,
    backgroundColor: Styles.white,
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
});
