import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  NotFound: undefined,
  Root: undefined,
  PhoneNumberListScreen: undefined,
};

export type CategoryTypes = keyof RootStackParamList;

export type BottomTabParamList = {
  'Make A Call': undefined,
  'About Not 911': undefined,
};

export type TabOneParamList = {
  HomeScreen: undefined,
};

export type TabTwoParamList = {
  TabTwoScreen: undefined,
};

export type PhoneScreenRouteProp = RouteProp<RootStackParamList, CategoryTypes>;

export type PhoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  CategoryTypes
>;
