import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Categories } from '../constants/Categories';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen(props: any) {
  console.log('props => ', props);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your emergency?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {Categories.map((category, i) => (
        <TouchableOpacity
          key={i}
          style={styles.button}
          onPress={() => {}}>
          <Text style={styles.buttonText}>
            {category.display}
          </Text>
        </TouchableOpacity>
      ))}
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
  button: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    width: '80%',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  }
});
