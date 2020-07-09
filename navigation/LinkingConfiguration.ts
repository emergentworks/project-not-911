import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
              // ViolenceScreen: 'viole',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Violence: {
        screens: {
          ViolenceScreen: 'violence',
        },
      },
      NotFound: '*',
    },
  },
};
