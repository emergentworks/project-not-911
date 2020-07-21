import * as React from 'react';

import useColorScheme from '../../hooks/useColorScheme';
import { PhoneNumbers } from '../../constants';
import { PhoneNumberListDark, PhoneNumberListLight } from './components';
import { Props } from './types';

export const PhoneNumberListScreen = (props: Props) => {
  const {navigation, route} = props;
  const numbers = PhoneNumbers[route.params.section];
  const colorScheme = useColorScheme();

  if (colorScheme === 'light') {
    return (
      <PhoneNumberListLight
        navigation={navigation}
        numbers={numbers}
        route={route}
      />
    );
  }

  return (
    <PhoneNumberListDark
      navigation={navigation}
      numbers={numbers}
      route={route}
    />
  );
}
