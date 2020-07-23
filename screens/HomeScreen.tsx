import React, { memo } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

import { Styles } from '../constants';
import useColorScheme from '../hooks/useColorScheme';
import { ButtonLink, RowLink, Text, View } from '../components';
import { Routes, Communities } from '../constants';
import { PhoneWhite, PhoneOrange, Community, CommunityWhite } from '../svgs';

export const HomeScreen = memo((props: any) => {
  const colorScheme = useColorScheme();

  return (
    <View
      lightColor={Styles.blue}
      darkColor={Styles.white}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={styles.crisis}>
            <Text style={[styles.bold, styles.dangerText]}>
              Life-threatening emergency?
            </Text>
        <View style={styles.danger}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Linking.openURL(`tel:911`);
            }}>
            <View style={styles.phoneImg}>
              <PhoneOrange />
            </View>
            <Text style={[styles.bold, styles.dangerText2]}>
              Call 911
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.innerView}>
          {/* <Text
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={styles.subtitle}>
            Not 911
          </Text> */}
          <Text
            lightColor={Styles.black}
            darkColor={Styles.white}
            style={[styles.bold, styles.title]}>
            What do you need help with?
          </Text>
          {Routes.map((route, i) => (
            colorScheme === 'light'
            ? (
              <RowLink
                key={i}
                includeIcon
                navigation={props.navigation}
                route={route}
              />
            )
            : (
              <ButtonLink
                key={i}
                navigation={props.navigation}
                route={route}
              />
            )
          ))}
        </View>
        <View style={styles.community}>
          {colorScheme === 'light'
            ? (
              <Community style={styles.marginBottom15} />
            )
            : (
              <CommunityWhite style={styles.marginBottom15} />
            )}
          <Text
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={[styles.title, styles.marginBottom40]}>
            Community Care Resources
          </Text>
          <Text
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={[styles.trusted, styles.bold]}>
            Trusted sources, vetted through community experience
          </Text>
          <View
            style={Styles.separator}
            lightColor={Styles.blue}
            darkColor={Styles.white}
          />
          {Communities.map((route, i) => (
            <RowLink
              key={i}
              navigation={props.navigation}
              route={route}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  dangerText: {
    alignSelf: 'stretch',
    color: Styles.white,
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  dangerText2: {
    alignSelf: 'stretch',
    color: Styles.orange,
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: Styles.blue,
    shadowOpacity: 0.25,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: Styles.white,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  phoneImg: {
    backgroundColor: Styles.white,
    position: 'absolute',
    left: 15,
  },
  community: {
    padding: 20,
    paddingTop: 30,
  },
  communityTxt: {
    fontSize: 20,
  },
  container: {
    backgroundColor: Styles.blue,
    flex: 1,
  },
  danger: {
    padding: 20,
    width:'100%',
  },
  emergencyText: {
    color: Styles.white,
    fontSize: 20,
    marginBottom: 10,
  },
  phone: {
    height: 50,
    marginVertical: 10,
    width: 50,
  },
  innerView: {
    padding: 20,
    paddingTop: 40,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginVertical30: {
    marginVertical: 30,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 32,
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
  marginRight10: {
    marginRight: 10,
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
