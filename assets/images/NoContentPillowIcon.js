import * as React from "react";
import Svg, { G, Path, Defs, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const NoContentPillowIcon = () => {
  return (
    <Svg width={290} height={228 / 1.25} viewBox="0 0 290 228">
      <Defs>
        <Path
          d="M1 4c0 15.708 12.637 28.442 28.225 28.442C44.814 32.442 57.45 19.708 57.45 4"
          id="prefix__a"
        />
        <Path
          d="M0 3c0 16.813 13.085 30.442 29.225 30.442S58.45 19.812 58.45 3"
          id="prefix__b"
        />
        <Path d="M1.5.5h55.911" id="prefix__c" />
        <Path
          d="M1 4c0 15.708 12.637 28.442 28.225 28.442C44.814 32.442 57.45 19.708 57.45 4"
          id="prefix__d"
        />
        <Path
          d="M0 3c0 16.813 13.085 30.442 29.225 30.442S58.45 19.812 58.45 3"
          id="prefix__e"
        />
        <Path d="M1.5.5h55.911" id="prefix__f" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path
          d="M241.93 17.56c10.515 0 29.574-17.37 37.563-6.702 7.99 10.668-5.616 21.003-5.616 34.798 0 13.796 13.073 29.364 13.606 68.588.532 39.225-11.347 45.82-13.606 62.988-2.26 17.168 11.585 25.624 4.748 35.204-6.838 9.58-23.394-1.283-36.694 0C228.63 213.718 192.875 226 143.819 226s-81.305-13.564-94.292-13.564c-12.988 0-25.992 18.815-36.75 8.3-10.757-10.513 3.993-29.583 3.993-43.504 0-13.922-14.27-24.15-14.27-62.988S16.77 61.45 16.77 45.656c0-15.793-12.7-24.445-3.992-33.806 8.707-9.362 20.295 3.434 34.859 5.71C62.2 19.834 96.019 2 145.075 2c49.056 0 93.218 15.56 96.856 15.56z"
          stroke="#FFF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M111.963 145.89c10.876 5.439 21.915 8.55 33.117 9.333 11.202.784 22.567-.76 34.094-4.633"
          stroke="#FFF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M123.416 86.48h42.78"
          stroke="#1C1C1C"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G transform="translate(71.5 73)">
          <Use fill="#2D2D2D" xlinkHref="#prefix__a" />
          <Path
            d="M26.956.5L6 21.326 26.956.5zM40.021 4L18.5 26"
            stroke="#373737"
            strokeWidth={10}
            strokeLinecap="square"
          />
          <Use
            stroke="#0A0D12"
            strokeWidth={3}
            strokeLinejoin="round"
            xlinkHref="#prefix__b"
          />
          <Use stroke="#0A0D12" strokeWidth={7.5} xlinkHref="#prefix__c" />
        </G>
        <G transform="translate(161.5 73)">
          <Use fill="#2D2D2D" xlinkHref="#prefix__d" />
          <Path
            d="M23.5 3.765L9.016 17.534"
            stroke="#373737"
            strokeWidth={10}
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <Path
            d="M40.371 4L18.306 25.307"
            stroke="#373737"
            strokeWidth={10}
            strokeLinecap="square"
          />
          <Use
            stroke="#0A0D12"
            strokeWidth={3}
            strokeLinejoin="round"
            xlinkHref="#prefix__e"
          />
          <Use stroke="#0A0D12" strokeWidth={7.5} xlinkHref="#prefix__f" />
        </G>
      </G>
    </Svg>
  );
};
