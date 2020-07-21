import React, { memo } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View as DefaultView } from 'react-native';
import * as Linking from 'expo-linking';

import { Styles } from '../constants';
import { ButtonLink, View } from '../components';
import { Routes, Community } from '../constants';
import { PhoneWhite } from '../svgs';

export const HomeScreen = memo((props: any) => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.danger}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Linking.openURL(`tel:911`);
          }}>
          <DefaultView style={styles.phoneImg}>
            <PhoneWhite />
          </DefaultView>
          <Text style={styles.btnText}>
            Call 911
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.subtitle}>
          Not 911
        </Text>
        <Text style={styles.title}>
          What do you need help with?
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
        <Text style={[styles.title, styles.blue, styles.marginBottom40]}>
          Community Care Resources
        </Text>
        <Text style={[styles.trusted, styles.blue, styles.bold]}>
          Trusted sources, vetted through community experience
        </Text>
        <View
          style={styles.separator}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
        {Community.map((route, i) => (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate(
                'PhoneNumberListScreen',
                route.params,
              )}>
              <Text style={styles.buttonText}>
                {route.btn.display}
              </Text>
              <Image
        source={require('../assets/images/caret.svg')}
        style={styles.caret}
      />
            </TouchableOpacity>
            <View
          style={styles.separator}
          lightColor={Styles.blue}
          darkColor="rgba(255,255,255,0.1)"
        />
          </>
        ))}
      </View>
    </ScrollView>
  </View>
));

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600',
  },
  bgBlue: {
    backgroundColor: Styles.blue,
  },
  btnText: {
    alignSelf: 'stretch',
    color: Styles.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: Styles.red,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  phoneImg: {
    backgroundColor: Styles.red,
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
    backgroundColor: Styles.blue,
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
  subtitle: {
    color: Styles.white,
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 22,
  },
  title: {
    color: Styles.white,
    fontSize: 28,
    fontWeight: '600',
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
  button: {
    alignItems: 'center',
    // backgroundColor: Styles.white,
    // borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 25,
    width: '100%',
  },
  buttonText: {
    color: Styles.blue,
    fontSize: 20,
    lineHeight: 20,
    width: '100%',
  },
  caret: {
    height: 14,
    width: 7,
  },
  marginRight10: {
    marginRight: 10,
  },
});
