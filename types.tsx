import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  NotFound: undefined,
  Root: undefined,
  PhoneNumberListScreen: undefined,
};

export type CategoryTypes = keyof RootStackParamList;

export type BottomTabParamList = {
  TabOne: undefined,
  TabTwo: undefined,
};

export type TabOneParamList = {
  TabOneScreen: undefined,
};

export type TabTwoParamList = {
  TabTwoScreen: undefined,
};

export type PhoneScreenRouteProp = RouteProp<RootStackParamList, CategoryTypes>;

export type PhoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  CategoryTypes
>;
