import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ButtonLink, EditScreenInfo, Text, View } from '../components';
import { Categories } from '../constants';

export default function TabOneScreen(props: any) {
  console.log('process.env => ', process.env);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        What is the nature of your emergency?
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {Categories.map((category, i) => (
        <ButtonLink
          key={i}
          navigation={props.navigation}
          title={category.display}
          to={category.to}
        />
      ))}
      {process.env.NODE_ENV === 'development' && (
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      )}
    </ScrollView>
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
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
