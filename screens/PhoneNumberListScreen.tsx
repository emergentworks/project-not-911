import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { EditScreenInfo, Text, View } from '../components';
import { PhoneNumbers } from '../constants';

export default function PhoneNumberListScreen(props: any) {
    // @ts-ignore
    const numbers = PhoneNumbers[props.route.params.section];
    console.log('props => ', props.route.params);

    return (
    <View style={styles.container}>
        <Text style={styles.title}> {props.route.params.title} </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <ScrollView>
        {numbers instanceof Array
        && numbers.map((entry: any, i) => (
            <View key={i}>
            <Text>{entry.display}</Text>
            <Text
                onPress={() => {
                    Linking.openURL( `tel:${entry.tel}` );
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
