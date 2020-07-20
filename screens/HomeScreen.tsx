import React, { memo } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';

import { Styles } from '../constants';
import { ButtonLink, View } from '../components';
import { Routes } from '../constants';
import { Phone } from '../svgs';

export const HomeScreen = memo((props: any) => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.danger}>
        <Text style={styles.emergencyText}>
          Life-Threatening Emergency?
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Linking.openURL(`tel:911`);
          }}>
          <View style={styles.phoneImg}>
            <Phone />
          </View>
          <Text style={styles.btnText}>
            Call 911
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerView}>
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
  btnText: {
    color: Styles.red,
    fontSize: 20,
    fontWeight: '600',
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  phoneImg: {
    position: 'absolute',
    left: 15,
  },
  community: {
    backgroundColor: Styles.white,
    padding: 20,
    paddingTop: 30,
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
    backgroundColor: Styles.red,
    padding: 20,
    textAlign: 'center',
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
