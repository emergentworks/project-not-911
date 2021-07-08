import * as Linking from 'expo-linking';
import React, { memo } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { RowLink, Text, View, BackButton } from '../components';
import { Styles, Routes } from '../constants';
import { useTheme, useLocation } from '../context';
import { Phone } from '../svgs';
// import { Props } from './PhoneNumberListScreen/types';

/**
 * @description This component renders the landing page (the list of hotline categories)
 */
export const HomeScreen = memo((props: any) => {
  const {mode} = useTheme();
  const {location}: {location: string} = useLocation();

  return (
    <View
      lightColor={Styles.white}
      darkColor={Styles.blue}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          lightColor={Styles.white}
          darkColor={Styles.orange}
          style={styles.danger}>
          <Text
            bold
            lightColor={Styles.orange}
            darkColor={Styles.white}
            style={styles.dangerTxt}>
            Life-threatening emergency?
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('tel://911');
            }}>
            <View
              style={styles.dangerBtn}
              lightColor={Styles.orange}
              darkColor={Styles.white}>
              <View
                lightColor={Styles.orange}
                darkColor={Styles.white}
                style={styles.phoneWrap}>
                <Phone
                  color={mode === 'light' ? Styles.white : Styles.orange}
                />
              </View>
              <Text
                bold
                lightColor={Styles.white}
                darkColor={Styles.orange}
                style={styles.dangerBtnTxt}>
                Call 911
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BackButton />
        <View style={styles.innerView}>
          <Text
            bold
            lightColor={Styles.black}
            darkColor={Styles.white}
            style={styles.title}>
              {location}
          </Text>
        </View>
        <View style={styles.innerView}>
          <Text
            bold
            lightColor={Styles.black}
            darkColor={Styles.white}
            style={styles.title}>
            What do you need help with?
          </Text>
          <View
            style={Styles.separator}
            lightColor={Styles.gray}
            darkColor={Styles.white}
          />
          {Routes.map((route, i) => (
            <RowLink
              key={i}
              includeIcon
              to="PhoneNumberListScreen"
              isLast={i === Routes.length - 1}
              navigation={props.navigation}
              route={route}
            />
          ))}
        </View>
        {/* <View style={styles.community}>
          <Community
            style={styles.marginBottom15}
          />
          <Text
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={[styles.title, styles.marginBottom40]}>
            Community Care Resources
          </Text>
          <Text
            bold
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={styles.trusted}>
            Trusted sources, vetted through community experience
          </Text>
          <View
            style={Styles.separator}
            lightColor={Styles.gray}
            darkColor={Styles.white}
          />
          {Communities.map((route, i) => (
            <RowLink
              key={i}
              navigation={props.navigation}
              route={route}
            />
          ))}
        </View> */}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  dangerTxt: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  danger: {
    display: 'flex',
    padding: 20,
    marginBottom: 50,
    width: '100%',
  },
  dangerBtnTxt: {
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  dangerBtn: {
    alignItems: 'center',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  phoneWrap: {
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
    flex: 1,
  },
  innerView: {
    paddingHorizontal: 20,
    // paddingTop: 40,
    paddingBottom: 20,
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
});
