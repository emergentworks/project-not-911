import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type tCacheUnion = 'Boston' | 'Chicago' | 'New York' | 'Los Angeles' | 'San Francisco Bay Area';

/**
 * @description global types file. should just live in a declarations folder, ideally
 */

export type RootStackParamList = {
  '404': undefined,
  'city-select': undefined,
  'numbers': undefined,
  'category-select': undefined,
};

export type CategoryTypes = keyof RootStackParamList;

export type PhoneScreenRouteProp = RouteProp<RootStackParamList, CategoryTypes>;

export type PhoneScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  CategoryTypes
>;
