import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * @description global types file. should just live in a declarations folder, ideally
 */

export type RootStackParamList = {
  NotFound: undefined,
  Root: undefined,
  PhoneNumberListScreen: undefined,
};

export type CategoryTypes = keyof RootStackParamList;

export type BottomTabParamList = {
  'CitySelect': undefined,
  'About': undefined,
  'Settings': undefined,
};

export type TabOneParamList = {
  CitySelectScreen: undefined,
};

export type TabTwoParamList = {
  AboutScreen: undefined,
};

export type TabThreeParamList = {
  SettingsScreen: undefined,
};

export type PhoneScreenRouteProp = RouteProp<RootStackParamList, CategoryTypes>;

export type PhoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  CategoryTypes
>;
