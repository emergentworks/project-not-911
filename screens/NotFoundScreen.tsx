import React, { memo } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components';
import { RootStackParamList } from '../types';

/**
 * @description This component renders the 404 page.
 * Should never render if used as app, but exists for web version
 */
const NotFoundScreen = memo(({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <View style={styles.container}>
    <Text bold style={styles.title}>This screen doesn't exist.</Text>
    <TouchableOpacity
      onPress={() => navigation.replace('Root')}
      style={styles.link}>
      <Text style={styles.linkText}>
        Go to home screen!
      </Text>
    </TouchableOpacity>
  </View>
));

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
    padding: 20,
    paddingBottom: 50,
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
