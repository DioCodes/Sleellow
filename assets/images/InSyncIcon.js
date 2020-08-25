import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const InSyncIcon = (props,{ iconWidth, iconHeight }) => {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 422 288" {...props}>
      <G
        stroke="#FFF"
        strokeWidth={20}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M382.88 250.032c22.78-12.408 34.171-34.774 34.171-67.1 0-52.462-30-78.692-90-78.692-7.925-20.994-19.183-35.32-33.774-42.98-14.592-7.66-32.517-8.654-53.775-2.98C210.27 11.015 173.238-4.91 128.41 10.5c-44.83 15.412-62.527 50.152-53.093 104.222-46.667 10.52-70 35.003-70 73.45 0 57.672 48.234 73.451 70 73.451h141.711" />
        <Path d="M239 233.147l49.812 49.529L381.01 191" />
      </G>
    </Svg>
  );
};
