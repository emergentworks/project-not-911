import { PhoneScreenNavigationProp } from '../../types';
import { PhoneNumbers } from '../../constants';

type SectionsUnion = keyof typeof PhoneNumbers;
export type Props = {
  navigation: PhoneScreenNavigationProp,
  route: {
    params: {
      section: SectionsUnion,
      title: string,
    },
  },
};

export type ComponentProps = Props & {
  numbers: any[],
};
