import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Logo } from '../svgs';

// the clickable logo at the top of every screen
export const HeaderTitle = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // navigate to the top of the HomeStack
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }}>
      <View
        style={{
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Logo />
      </View>
    </TouchableOpacity>
  );
};
