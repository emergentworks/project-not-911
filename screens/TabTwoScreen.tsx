import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.marginBottom30, styles.title]}>Defunding the Police</Text>
      <Text style={styles.title}>Public Safety First</Text>
      <Text style={styles.paragraph}>asdfasdgadfgsdfgsdf</Text>
      <Text style={styles.title}>Defund the police</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  paragraph: {
    fontSize: 15,
    color: 'white',
    paddingTop: 10,
    paddingLeft: 22,
    paddingBottom: 22,
  },
  marginBottom30: {
    marginBottom: 30,
  },
});
