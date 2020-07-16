import * as React from 'react';
import { StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

import { Text, View } from '../components';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.marginBottom30, styles.title]}>Defunding the Police</Text> */}
      <Text style={[styles.marginBottom30, styles.title]}>Public Safety First</Text>
      
      <Unorderedlist color="white" >
  <Text style={styles.paragraph}>Connecting people to trusted support communities.</Text>
      </Unorderedlist>
      <Unorderedlist color='white'>
      <Text style={styles.paragraph}>Protect the Vulnerable communities (from police).</Text>
      </Unorderedlist>

      <Text style={[styles.marginBottom30, styles.title]}>Part of a bigger initiative Code</Text>
      <Unorderedlist color="white">
      <Text style={styles.paragraph}>Step towards police defunding & Abolition</Text>
      </Unorderedlist>
      <Unorderedlist color="white">
      <Text style={styles.paragraph}>Decriminalizing unwanted community activity.</Text>
      </Unorderedlist>
      <Unorderedlist color="white">
      <Text style={styles.paragraph}>Moving away from police as the default resource.</Text>
      </Unorderedlist>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  paragraph: {
    fontSize: 15,
    color: 'white',
    // paddingTop: 10,
    // paddingLeft: 22,
    // paddingBottom: 35,
    marginBottom: 20,
  },
  marginBottom30: {
    marginBottom: 30,
  },
});
