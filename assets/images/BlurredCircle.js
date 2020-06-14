import * as React from "react";
import Svg, { Defs, Circle, G, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const BlurredCircle = () => {
  return (
    <Svg width={229} height={229} viewBox="0 0 229 229">
      <Defs>
        <Circle id="prefix__b" cx={94.5} cy={94.5} r={94.5} />
      </Defs>
      <G transform="translate(20 20)" fill="none" fillRule="evenodd">
        <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <Use fill="red" xlinkHref="#prefix__b" />
      </G>
    </Svg>
  );
};
