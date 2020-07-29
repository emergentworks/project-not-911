import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

import useColorScheme from '../hooks/useColorScheme';

export const Caret = memo((props: React.SVGProps<SVGSVGElement> & {style?: any}) => {
  const colorScheme = useColorScheme();

  return (
    // @ts-ignore
    <Svg
      style={props.style}
      width={9}
      height={16}
      fill="none"
      {...props}>
      <Path
        d="M1 1l7 7-7 7"
        stroke={colorScheme === 'light' ? '#B9B9B9' : '#fff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
