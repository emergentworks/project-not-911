import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why we built Not 911</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});
