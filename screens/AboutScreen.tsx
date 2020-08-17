import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../components';
import { Styles } from '../constants';
import { Cross, Hand } from '../svgs';

/**
 * @description This component renders the about page
 */
export const AboutScreen = memo(() => (
  <View
    lightColor={Styles.white}
    darkColor={Styles.blue}
    style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.innerView}>
        <View style={styles.marginBottom15}>
          <Cross />
        </View>
        <Text
          bold
          lightColor={Styles.black}
          darkColor={Styles.white}
          style={styles.title}>
          About Not911
        </Text>
        <Text
          lightColor="#353535"
          darkColor={Styles.white}
          style={styles.paragraph}>
          Not 911 is a list of community-based groups that offer preventative services and strategies for issues related to mental health, homelessness, legal aid and other topics.
        </Text>
        <Text
          bold
          lightColor="#353535"
          darkColor={Styles.white}
          style={[styles.paragraph, styles.marginBottom40]}>
          These are not organizations that should be used in a life-threatening emergency. If someone is experiencing a life-threatening emergency, call 911 immediately.
        </Text>
        <Text
          bold
          lightColor={Styles.black}
          darkColor={Styles.white}
          style={styles.title}>
          About Us
        </Text>
        <Text
          lightColor="#353535"
          darkColor={Styles.white}
          style={styles.paragraph}>
          The Code Cooperative is a community of people who learn, use, and build technology to create life changing possibilities for individuals and communities impacted by incarceration.
        </Text>
        <Text
          lightColor="#353535"
          darkColor={Styles.white}
          style={[styles.paragraph, styles.marginBottom40]}>
          We also build software for purpose-driven organizations and careers for our communities.
        </Text>
        <View style={styles.marginBottom15}>
          <Hand />
        </View>
        <Text
          bold
          lightColor={Styles.black}
          darkColor={Styles.white}
          style={styles.title}>
          Interested in hiring us?
        </Text>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.paragraph, styles.marginBottom60]}>
          hello@codecooperative.org
        </Text>
        <Text
          bold
          lightColor="#353535"
          darkColor={Styles.white}
          style={styles.builtBy}
          onPress={() => {
            Linking.openURL('https://github.com/codecooperative/project-not-911');
          }}>
          Built by Code Cooperative
        </Text>
        <Text
          lightColor="#353535"
          darkColor={Styles.white}
          style={[styles.builtBy, styles.marginBottom40]}>
          Tomás Correa, Ross Patton, Ashley Newcomer, Army Armstead, Lauren Wilkinson, Christina Entcheva, Jaclyn Perrone, Johann Diedrick
        </Text>
      </View>
    </ScrollView>
  </View>
));

const styles = StyleSheet.create({
  builtBy: {
    fontSize: 14,
    lineHeight: 18,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  innerView: {
    paddingBottom: 50,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 26,
    marginBottom: 20,
  },
  marginBottom40: {
    marginBottom: 40,
  },
  marginBottom60: {
    marginBottom: 60,
  },
});
