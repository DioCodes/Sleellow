import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const StatsImage = () => {
  return (
    <Svg width={200} height={200} viewBox="0 0 456 457">
      <G fill="none" fillRule="evenodd">
        <G opacity={0.098} fill="#D8D8D8">
          <G>
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 60)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 120)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 180)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 240)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 300)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 360)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
          <G transform="translate(0 420)">
            <Circle cx={18} cy={19} r={18} />
            <Circle cx={78} cy={18} r={18} />
            <Circle cx={138} cy={18} r={18} />
            <Circle cx={198} cy={18} r={18} />
            <Circle cx={258} cy={18} r={18} />
            <Circle cx={318} cy={18} r={18} />
            <Circle cx={378} cy={18} r={18} />
            <Circle cx={438} cy={18} r={18} />
          </G>
        </G>
        <G
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={36}
        >
          <Path d="M318 18H138M258 78H78M378 138H198M378 198H198M318 258H78M318 318H138M258 378H78M258 438H78" />
        </G>
      </G>
    </Svg>
  );
};
