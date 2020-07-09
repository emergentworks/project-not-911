import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { EditScreenInfo, Text, View } from '../components';
import { PhoneNumbers } from '../constants';

export default function ViolenceScreen(props: any) {
  console.log('violence props => ', props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Violence
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        onPress={() => {
          Linking.openURL('tel:555 555 5555');
        }}>
        Number List Below
      </Text>
      <ScrollView>
        {!!PhoneNumbers[props.route.name]
          && PhoneNumbers[props.route.name].map((entry: any) => (
            <View>
              <Text>{entry.display}</Text>
              <Text>{entry.tel}</Text>
            </View>
          ))}
      </ScrollView>
      {/* <EditScreenInfo path="/screens/ViolenceScreen.tsx" /> */}
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
