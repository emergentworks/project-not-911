import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { PhoneScreenNavigationProp } from '../types';
import { EditScreenInfo, Text, View } from '../components';
import { PhoneNumbers } from '../constants';

type SectionsUnion = keyof typeof PhoneNumbers;
type Props = {
  navigation: PhoneScreenNavigationProp,
  route: {
    params: {
      section: SectionsUnion,
      title: string,
    },
  },
};

export const PhoneNumberListScreen = (props: Props) => {
  const {route} = props;
  const numbers = PhoneNumbers[route.params.section];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.params.title}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        {numbers instanceof Array
          && numbers.map((entry: any, i) => (
            <View key={i}>
              <Text>{entry.display}</Text>
              <Text
                onPress={() => {
                  Linking.openURL(`tel:${entry.tel}`);
                }}>
                {entry.tel}
              </Text>
            </View>
          ))}
      </ScrollView>
      <EditScreenInfo path="/screens/PhoneNumberListScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
});
