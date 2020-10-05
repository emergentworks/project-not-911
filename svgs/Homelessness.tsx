import React, { memo } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import {useTheme} from '../context';

export const Homelessness = memo(() => {
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  const fill = mode === 'light' ? '#3333FF' : '#fff';

  return (
    // @ts-ignore
    <Svg width={32} height={32} fill="none">
      <Rect
        x={1}
        y={8}
        width={4}
        height={21}
        rx={1}
        stroke={fill}
        strokeWidth={1.8}
      />
      <Rect
        x={26}
        y={18}
        width={4}
        height={11}
        rx={1}
        stroke={fill}
        strokeWidth={1.8}
      />
      <Path stroke={fill} strokeWidth={1.8} d="M5 21h21v4H5z" />
      <Rect
        x={5}
        y={17}
        width={8}
        height={4}
        rx={2}
        stroke={fill}
        strokeWidth={1.8}
      />
    </Svg>
  );
});
