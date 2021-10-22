import * as Linking from 'expo-linking';

/**
 * @description This is necessary for any links to work natively
 * Any new screens/routes we add to the app, must also be defined here
 */
export const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('')],
  config: {
    screens: {
      Home: {
        screens: {
          city: {
            path: 'app/city-select',
            exact: true,
          },
          category: {
            path: 'app/category-select/:location',
            exact: true,
          },
          numbers: {
            path: 'app/numbers/:section',
            exact: true,
          },
        },
      },
      About: {
        screens: {
          about: {
            path: 'app/about',
            exact: true,
          },
        },
      },
      Settings: {
        screens: {
          settings: {
            path: 'app/settings',
            exact: true,
          },
        },
      },
      '404': '*',
    },
  },
};
