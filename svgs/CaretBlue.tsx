import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

export const CaretBlue = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width={9} height={16} fill="none" {...props}>
    <Path
      d="M1 1l7 7-7 7"
      stroke="#B9B9B9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
));
