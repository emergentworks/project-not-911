import React, { memo } from "react";
import Svg, { Defs, G, Mask, Path, Use } from "react-native-svg";

export const Home = memo((props: React.SVGProps<SVGSVGElement>) => (
  // @ts-ignore
  <Svg width="19px" height="22px" viewBox="0 0 19 22" {...props}>
    <Defs>
      <Path
        d="M0,6.17681 C0,5.45047 0.393784,4.78123 1.02871,4.42849 L7.96893,0.572816 C8.60511,0.219382 9.38307,0.239419 10.0002,0.625134 L16.06,4.4125 C16.6448,4.77798 17,5.41892 17,6.1085 L17,18 C17,19.1046 16.1046,20 15,20 L2,20 C0.89543,20 0,19.1046 0,18 L0,6.17681 Z"
        id="path-1"
      />
    </Defs>
    <G
      id="Page-1"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <G id="home" transform="translate(1.000000, 1.000000)">
        <Mask id="mask-2" fill="white">
          <Use xlinkHref="#path-1" />
        </Mask>
        <Use id="Shape" stroke={props.color} xlinkHref="#path-1" />
      </G>
    </G>
  </Svg>
));
