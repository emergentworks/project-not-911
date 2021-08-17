import React, { memo } from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

export const Boise = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
    <Circle cx={11} cy={11} r={10} stroke={props.color} strokeWidth={2} />
    <Rect x={10} y={9} width={2} height={7} rx={1} fill={props.color} />
    <Circle cx={11} cy={6} r={1} fill={props.color} />
  </Svg>
));
