import * as Linking from 'expo-linking';

/**
 * @description This is necessary for any links to work natively
 * Any new screens/routes we add to the app, must also be defined here
 */
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
