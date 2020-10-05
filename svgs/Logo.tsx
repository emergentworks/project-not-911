import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import {useTheme} from '../context';

export const Logo = memo((props: React.SVGProps<SVGSVGElement>) => {
  const {mode}: {mode: 'light' | 'dark'} = useTheme();

  if (mode === 'dark') {
    return (
      // @ts-ignore
      <Svg width={45} height={22} viewBox="0 0 45 22" fill="none" {...props}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 7.29c0 3.99 2.85 6.84 6.66 6.84 2.82 0 3.99-1.26 4.5-1.98h.36v2.4c0 2.4-1.41 3.72-3.9 3.72-1.899 0-3.007-.956-3.325-2.282l-3.854 1.157c.83 2.974 3.571 4.666 7.179 4.666 4.47 0 7.86-2.55 7.86-7.5V6.96c0-4.11-3.27-7.02-7.68-6.96C5.24.06 2 2.94 2 7.29zm7.74 3.75c-2.25 0-3.78-1.47-3.78-3.75 0-2.28 1.59-3.75 3.78-3.75 2.19 0 3.78 1.41 3.78 3.75 0 2.28-1.53 3.75-3.78 3.75zM23.79.42l-5.4 9.48h4.14l2.94-5.28h.36v16.8h3.96v-21h-6zm7.755 9.48l5.4-9.48h6v21h-3.96V4.62h-.36l-2.94 5.28h-4.14z"
          fill="#EDEDED"
        />
        <Path fill="#33F" d="M0 11h45v4H0z" />
      </Svg>
    );
  }

  return (
    // @ts-ignore
    <Svg width={45} height={22} viewBox="0 0 45 22" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.29c0 3.99 2.85 6.84 6.66 6.84 2.82 0 3.99-1.26 4.5-1.98h.36v2.4c0 2.4-1.41 3.72-3.9 3.72-1.899 0-3.007-.956-3.325-2.282l-3.854 1.157c.83 2.974 3.571 4.666 7.179 4.666 4.47 0 7.86-2.55 7.86-7.5V6.96c0-4.11-3.27-7.02-7.68-6.96C5.24.06 2 2.94 2 7.29zm7.74 3.75c-2.25 0-3.78-1.47-3.78-3.75 0-2.28 1.59-3.75 3.78-3.75 2.19 0 3.78 1.41 3.78 3.75 0 2.28-1.53 3.75-3.78 3.75zM23.79.42l-5.4 9.48h4.14l2.94-5.28h.36v16.8h3.96v-21h-6zm7.755 9.48l5.4-9.48h6v21h-3.96V4.62h-.36l-2.94 5.28h-4.14z"
        fill="#000"
      />
      <Path fill="#33F" d="M0 11h45v4H0z" />
    </Svg>
  );
});
