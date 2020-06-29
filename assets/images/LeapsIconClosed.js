import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const LeapsIconClosed = () => {
  return (
    <Svg width={34 * 2} height={14 * 2} viewBox="0 0 34 14">
      <G fill="none" fillRule="evenodd">
        <Path
          d="M.725 5.657C6.462 2.501 10.036.753 11.447.414c2.188-.525 3.069.892 5.68.892 2.611 0 3.206-1.487 5.177-.892C23.577.8 27.215 2.551 33.218 5.67a.5.5 0 01.126.794c-4.54 4.615-9.945 6.923-16.217 6.923-6.278 0-11.781-2.312-16.51-6.934a.5.5 0 01.108-.796z"
          fill="#FFF"
        />
        <Path
          d="M2.582 6.269c6.436-.667 10.056-1 10.86-1 1.207 0 2.414 1 3.62 1 1.207 0 2.414-1 3.62-1 .805 0 4.425.333 10.861 1"
          stroke="#0A0D12"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
