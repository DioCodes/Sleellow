import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const LeapsIconBreath = () => {
  return (
    <Svg width={34 * 2} height={37 * 2} viewBox="0 0 34 40">
      <G fill="none" fillRule="evenodd">
        <Path
          d="M.565 7.343C6.395 3.193 10.023.897 11.447.456c2.188-.679 3.069 1.151 5.68 1.151 2.611 0 3.206-1.92 5.177-1.151 1.285.5 4.975 2.8 11.073 6.896a.5.5 0 01.121.715c-4.57 6.098-10.028 9.147-16.371 9.147-6.347 0-11.902-3.052-16.666-9.156a.5.5 0 01.104-.715z"
          fill="#FFF"
        />
        <Path
          d="M3.455 8.155c3.92 4.355 8.458 6.533 13.614 6.533 5.153 0 9.688-2.175 13.607-6.525h0a.5.5 0 00-.178-.796c-4.666-1.962-7.591-3.08-8.774-3.353-1.854-.43-2.463.218-4.655.218-2.328 0-2.704-.899-5.031-.218-1.479.432-4.282 1.548-8.411 3.348h0a.5.5 0 00-.172.793z"
          stroke="#FFF"
          fill="#0A0D12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G opacity={1} stroke="#434547">
          <Path d="M16.5 21.5v12.134c0 3.027 2.364 2.976 3.704 2.798 1.34-.18 2.296-1.12 2.296-2.798 0-1.118-.765-1.83-2.296-2.132M11.5 20.5v8.182c0 2.976-2.364 2.927-3.704 2.75-1.34-.175-2.296-1.1-2.296-2.75 0-1.1.765-1.799 2.296-2.096M21.5 20.5v6.113c0 3.05 2.364 2.998 3.704 2.818 1.34-.18 2.296-1.127 2.296-2.818 0-1.127-.765-1.843-2.296-2.148" />
        </G>
      </G>
    </Svg>
  );
};
