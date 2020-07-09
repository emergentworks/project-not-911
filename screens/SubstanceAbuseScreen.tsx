import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

import { EditScreenInfo, Text, View } from '../components';

export default function SubstanceAbuseScreen() {

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Substance Abuse</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text onPress={() => {
            Linking.openURL('tel:555 555 5555');
        }}>
            call number
        </Text>
        <EditScreenInfo path="/screens/SubstanceAbuseScreen.tsx" />
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
