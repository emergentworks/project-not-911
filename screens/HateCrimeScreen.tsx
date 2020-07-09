import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { EditScreenInfo, Text, View } from '../components';
import { PhoneNumbers } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function HateCrimeScreen(props: any) {
    // @ts-ignore
    const numbers = PhoneNumbers[props.route.name];

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Hate Crime</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text onPress={() => {
            Linking.openURL('tel:555 555 5555');
        }}>
            call number
        </Text>
        <ScrollView>
            {numbers instanceof Array && numbers.map((entry: any) => (
            <view>
                <text>{entry.display}</text>
                <text>{entry.tel}</text>
            </view>
            ))}
        </ScrollView>
        <EditScreenInfo path="/screens/HateCrimeScreen.tsx" />
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
