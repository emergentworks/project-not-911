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
          Home: {
            screens: {
              HomeScreen: 'app',
            },
          },
          About: {
            screens: {
              AboutScreen: 'app/about',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'app/settings',
            },
          },
          PhoneNumberList: {
            screens: {
              PhoneNumberListScreen: 'app/numbers/:section',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
