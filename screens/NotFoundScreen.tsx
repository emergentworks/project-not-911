import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components';

/**
 * @description This component renders the 404 page.
 * Should never render if used as app, but exists for web version
 */
export const NotFoundScreen = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text bold style={styles.title}>This screen doesn&apos;t exist.</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            // @ts-ignore
            routes: [{ name: 'Home' }],
          });
        }}
        style={styles.link}>
        <Text style={styles.linkText}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
      );
    </View>
  );
});

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
