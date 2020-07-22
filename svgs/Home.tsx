import React, { memo } from "react";
import Svg, { Mask, Path } from "react-native-svg";

export const Home = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width={17} height={20} viewBox="0 0 17 20" fill="none" {...props}>
    <Mask id="prefix__a" fill={props.color}>
      <Path d="M0 6.177a2 2 0 011.029-1.749L7.969.573A2 2 0 0110 .625l6.06 3.787A2 2 0 0117 6.11V18a2 2 0 01-2 2H2a2 2 0 01-2-2V6.177z" />
    </Mask>
    <Path
      d="M0 6.177a2 2 0 011.029-1.749L7.969.573A2 2 0 0110 .625l6.06 3.787A2 2 0 0117 6.11V18a2 2 0 01-2 2H2a2 2 0 01-2-2V6.177z"
      stroke={props.color}
      strokeWidth={4}
      mask="url(#prefix__a)"
    />
  </Svg>
));
