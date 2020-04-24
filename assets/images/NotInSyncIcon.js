import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const NotInSyncIcon = ({ iconWidth, iconHeight }) => {
  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 422 295">
      <G
        stroke="#FFF"
        strokeWidth={20}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M383.892 249.47c22.106-12.515 33.159-34.695 33.159-66.538 0-52.462-30-78.692-90-78.692-7.925-20.994-19.183-35.32-33.774-42.98-14.592-7.66-32.517-8.654-53.775-2.98C210.27 11.015 173.238-4.91 128.41 10.5c-44.83 15.412-62.527 50.152-53.093 104.222-46.667 10.52-70 35.003-70 73.45 0 57.672 48.234 73.451 70 73.451h152.216M251 173l117.013 117.013m-117.013 0L368.013 173" />
      </G>
    </Svg>
  );
};
