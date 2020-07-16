import React, { memo } from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { Styles } from '../constants';
import { ButtonLink } from '../components';
import { Routes } from '../constants';
//
export const HomeScreen = memo((props: any) => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.danger}>
        <Text style={styles.dangerText}>
          Immediate Danger?
        </Text>
        <Image
          source={require('../assets/images/phone_reverse.svg')}
          style={styles.phone}
        />
        <Text style={[styles.dangerText, styles.bold]}>
          Call 911
        </Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.title}>
          What is the nature of your situation?
        </Text>
        {Routes.map((route, i) => (
          <ButtonLink
            key={i}
            navigation={props.navigation}
            route={route}
          />
        ))}
      </View>
      <View style={styles.community}>
        <Image
          source={require('../assets/images/community.svg')}
          style={styles.communityImg}
        />
        <Text style={[styles.title, styles.blue, styles.marginBottom30]}>
          Community Care Resources
        </Text>
        <Text style={[styles.trusted, styles.blue]}>
          Trusted sources, vetted through community experience
        </Text>
      </View>
    </ScrollView>
  </View>
));

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600',
  },
  community: {
    backgroundColor: Styles.white,
    padding: 20,
  },
  communityImg: {
    height: 42,
    width: 96,
  },
  container: {
    backgroundColor: Styles.white,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  danger: {
    alignItems: 'center',
    backgroundColor: Styles.red,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width:'100%',
  },
  dangerText: {
    color: Styles.white,
    fontSize: 18,
  },
  phone: {
    height: 50,
    marginVertical: 10,
    width: 50,
  },
  innerView: {
    backgroundColor: Styles.blue,
    // alignItems: 'center',
    // flex: 1,
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    color: Styles.white,
    fontFamily: Styles.font,
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 16,
  },
  blue: {
    color: Styles.blue,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  trusted: {
    fontSize: 15,
    lineHeight: 20,
  },
});
