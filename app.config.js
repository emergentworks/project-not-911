import 'dotenv/config';

export default {
  'expo': {
    'backgroundColor': '#3333ff',
    'primaryColor': '#3333ff',
    'name': 'Not 911',
    'slug': 'not-911',
    'scheme': 'not911',
    'version': '1.0.0',
    'orientation': 'portrait',
    'privacy': 'unlisted',
    'icon': './assets/images/icon.png',
    'userInterfaceStyle': 'automatic',
    'packagerOpts': {
      'config': 'metro.config.js',
      'sourceExts': [
        'expo.ts',
        'expo.tsx',
        'expo.js',
        'expo.jsx',
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'wasm',
        'svg',
      ],
    },
    'splash': {
      'image': './assets/images/icon.png',
      'resizeMode': 'contain',
      'backgroundColor': '#3333ff',
    },
    'updates': {
      'fallbackToCacheTimeout': 0,
    },
    'assetBundlePatterns': [
      '**/*',
    ],
    'android': {
      'package': 'nyc.not911',
      'permissions': [],
      'versionCode': 14,
      'adaptiveIcon': {
        'backgroundColor': '#3333ff',
        'foregroundImage': './assets/images/icon.png',
      },
    },
    'ios': {
      'bundleIdentifier': 'nyc.not911',
      'buildNumber': '1.0.2',
      'supportsTablet': true,
    },
    'web': {
      'favicon': './assets/images/favicon-32x32.png',
      'startUrl': './app/',
    },
  },
};
