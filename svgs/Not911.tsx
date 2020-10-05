import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const Not911 = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width={34} height={33} viewBox="0 0 34 33" fill="none" {...props}>
    <Path
      d="M14 17.6H3V8h11v20H0M22 5v26M30 5v26"
      stroke="#000"
      strokeWidth={6}
    />
    <Path fill="#fff" d="M3.485 32.957L1 30.473 30.803.67l2.484 2.484z" />
  </Svg>
));
