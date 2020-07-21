import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components';
import { Styles } from '../constants';

export const AboutScreen = memo(() => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        How to use the app.
      </Text>
      <Text style={styles.paragraph}>
        Not 911 is a list of community-based groups that offer preventative services and strategies for issues related to mental health, homelessness, legal aid and other topics.
      </Text>
      <Text style={[styles.paragraph, styles.marginBottom40]}>
        These are not organizations that should be used in a life-threatening emergency. If someone is experiencing a life-threatening emergency, call 911 immediately.
      </Text>
      <Text style={styles.title}>
        About Code Cooperative
      </Text>
      <Text style={styles.paragraph}>
        The Code Cooperative is a community of people who learn, use, and build technology to create life changing possibilities for individuals and communities impacted by incarceration.
      </Text>
      <Text style={[styles.paragraph, styles.marginBottom40]}>
        We also build software for purpose-driven organizations and careers for our communities.
      </Text>
      <Text style={styles.title}>
        Interested in hiring us?
      </Text>
      <Text style={[styles.paragraph, styles.marginBottom40]}>
        Reach us at hello@codecooperative.org
      </Text>
    </ScrollView>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Styles.blue,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Styles.white,
    marginBottom: 14,
  },
  paragraph: {
    fontSize: 20,
    color: Styles.white,
    lineHeight: 24,
    marginBottom: 20,
  },
  marginBottom40: {
    marginBottom: 40,
  },
});
