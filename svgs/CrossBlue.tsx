import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

export const CrossBlue = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width={52} height={50} viewBox="0 0 52 50" fill="none" {...props}>
    <Path
      d="M29.487 0v15.835c0 3.958 1.847 4.678 3.694 4.678h18.101M29.487 50V34.166c0-3.96 1.816-4.679 3.632-4.679h18.163M20.513 0v15.835c0 3.958-1.739 4.678-3.477 4.678H0M20.513 50V34.166c0-3.96-1.71-4.679-3.418-4.679H0"
      stroke="#33F"
      strokeWidth={3.5}
    />
  </Svg>
));
