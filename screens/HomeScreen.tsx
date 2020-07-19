import React, { memo } from 'react';
import { Image, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';

import { Styles } from '../constants';
import { ButtonLink, View } from '../components';
import { Routes } from '../constants';

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
        {/* <Image
          source={require('../assets/images/community.svg')}
          style={styles.communityImg}
        /> */}
        <Text style={[styles.title, styles.blue, styles.marginBottom40]}>
          Community Care Resources
        </Text>
        <Text style={[styles.trusted, styles.blue, styles.bold]}>
          Trusted sources, vetted through community experience
        </Text>
        <View
          style={[styles.marginBottom30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          BIPOC Community
        </Text>
        <View
          style={[styles.marginVertical30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          LGBTQIA+ Community
        </Text>
        <View
          style={[styles.marginVertical30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          Immigrant Community
        </Text>
        <View
          style={[styles.marginVertical30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          Substance Abuse Community
        </Text>
        <View
          style={[styles.marginVertical30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          Homeless Community
        </Text>
        <View
          style={[styles.marginVertical30, styles.separator]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={[styles.communityTxt, styles.blue]}>
          Elderly Community
        </Text>
        <View
          style={[styles.separator, styles.marginVertical30]}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
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
    paddingTop: 30,
  },
  communityImg: {
    height: 42,
    width: 96,
  },
  communityTxt: {
    fontSize: 20,
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
    padding: 20,
    paddingTop: 40,
  },
  separator: {
    height: 1,
    width: '100%',
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginVertical30: {
    marginVertical: 30,
  },
  title: {
    color: Styles.white,
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 16,
  },
  blue: {
    color: Styles.blue,
  },
  marginBottom40: {
    marginBottom: 40,
  },
  trusted: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
  },
});
