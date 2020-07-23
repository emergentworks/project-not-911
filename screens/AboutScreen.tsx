import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from '../components';
import { Styles } from '../constants';
import { CrossBlue, CrossWhite, HandBlue, HandWhite } from '../svgs';

export const AboutScreen = memo(() => {
  const colorScheme = useColorScheme();

  return (
    <View
      lightColor={Styles.white}
      darkColor={Styles.blue}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.marginBottom15}>
          {colorScheme === 'light' ? <CrossBlue /> : <CrossWhite /> }
        </View>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.bold, styles.title]}>
          About Not911
        </Text>
        <Text
          lightColor="#353535"
          darkColor={Styles.white}
          style={styles.paragraph}>
          Not 911 is a list of community-based groups that offer preventative services and strategies for issues related to mental health, homelessness, legal aid and other topics.
        </Text>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.paragraph, styles.bold, styles.marginBottom40]}>
          These are not organizations that should be used in a life-threatening emergency. If someone is experiencing a life-threatening emergency, call 911 immediately.
        </Text>
        <View style={styles.marginBottom15}>
          {colorScheme === 'light' ? <HandBlue /> : <HandWhite /> }
        </View>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.bold, styles.title]}>
          About Code Cooperative
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
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.bold, styles.title]}>
          Interested in hiring us?
        </Text>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={[styles.paragraph, styles.marginBottom40]}>
          Reach us at hello@codecooperative.org
        </Text>
        <View
        style={styles.box}>
        <Text
            lightColor={Styles.blue}
            darkColor={Styles.white}
            style={[styles.bold2, styles.title]}>
            Built by Code Cooperative:
        </Text>
        <Text
          lightColor={Styles.blue}
          darkColor={Styles.white}
          style={styles.names}>
          Tomas, Ross, Ashley etc.
        </Text>
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  bold2: {
    fontWeight: 'bold',
    color: Styles.blue,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 14,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 20,
  },
  marginBottom40: {
    marginBottom: 40,
  },
  names: {
    fontSize: 20,
    color: Styles.blue,
  },
  box: {
    backgroundColor: Styles.white,
    borderRadius: 10,
    display: 'flex',
    marginBottom: 30,
    padding: 30,
    width: '100%',
  },
});
