import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          'Home': {
            screens: {
              HomeScreen: 'home',
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
