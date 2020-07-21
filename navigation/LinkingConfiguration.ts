import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          'Home': {
            screens: {
              HomeScreen: 'call',
            },
          },
          'About': {
            screens: {
              AboutScreen: 'about',
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
