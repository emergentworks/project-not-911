import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your emergency?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={() => {}} title='Test' />
      <Button onPress={() => {}} title='Violence' />
      <Button onPress={() => {}} title='Mental Health Crisis' />
      <Button onPress={() => {}} title='Homelessness' />
      <Button onPress={() => {}} title='Noise/Nuisances' />
      <Button onPress={() => {}} title='Hate Crime' />
      <Button onPress={() => {}} title='Substance Abuse' />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
