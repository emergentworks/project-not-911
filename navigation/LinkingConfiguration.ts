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
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Violence: {
            screens: {
              ViolenceScreen: 'Violence',
            },
          },
          MentalHealthCrisis: {
            screens: {
              MentalHealthCrisisScreen: 'Mental Health Crisis',
            },
          },
          Homelessness: {
            screens: {
              HomelessnessScreen: 'Homelessness',
            },
          },
          NoiseNuisances: {
            screens: {
              NoiseNuisancesScreen: 'Noise / Nuisances',
            },
          },
          HateCrime: {
            screens: {
              HateCrimeScreen: 'Hate Crime',
            },
          },
          SubstanceAbuse: {
            screens: {
              SubstanceAbuseScreen: 'Substance Abuse',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
