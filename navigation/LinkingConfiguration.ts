import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          'Make A Call': {
            screens: {
              TabOneScreen: 'call',
            },
          },
          'About Not 911': {
            screens: {
              TabTwoScreen: 'about',
            },
          },
          PhoneNumberList: {
            screens: {
              PhoneNumberListScreen: 'numbers/:section',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
