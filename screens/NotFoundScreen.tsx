import { StackScreenProps } from '@react-navigation/stack';
import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components';
import { RootStackParamList } from '../types';

const NotFoundScreen = memo(({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <View style={styles.container}>
    <Text bold style={styles.title}>This screen doesn't exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
));

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
