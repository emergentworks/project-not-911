import { PhoneNumbers } from '../../constants';
import { PhoneScreenNavigationProp } from '../../types';

type SectionsUnion = keyof typeof PhoneNumbers;
export type Props = {
  navigation: PhoneScreenNavigationProp,
  route: {
    params: {
      section: SectionsUnion,
      title: string,
      city: string,
    },
  },
};

export type ComponentProps = Props & {
  numbers: any[],
};
