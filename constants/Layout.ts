import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const Layout = {
  window: {
    height,
    width,
  },
  isSmallDevice: width < 375,
};
