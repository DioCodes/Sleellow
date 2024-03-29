import * as React from "react";
import { Animated } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const SecurityImage = (props, { imageWidth, imageHeight }) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  return (
    <AnimatedSvg width={imageWidth} height={imageHeight} viewBox="0 0 433 510" {...props}>
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
          d="M6.875 47.205c34.75-3.678 69.729-9.07 104.937-16.174C164.625 20.374 211.32 4.856 216.75 4.856c5.43 0 52.805 15.404 104.937 25.675a1146.2 1146.2 0 00104.938 15.674c6.945 157.743-5.405 262.49-37.05 314.245-31.647 51.754-89.255 100.054-172.825 144.9-83.57-44.846-141.179-93.146-172.825-144.9C12.28 308.696-.07 204.28 6.875 47.205z"
          stroke="#FFF"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M313.93 165.56c10.515 0 29.574-17.37 37.563-6.702 7.99 10.668-5.616 21.003-5.616 34.798 0 13.796 13.073 29.364 13.606 68.588.532 39.225-11.347 45.82-13.606 62.988-2.26 17.168 11.585 25.624 4.748 35.204-6.838 9.58-23.394-1.283-36.694 0C300.63 361.718 264.875 374 215.819 374s-81.305-13.564-94.292-13.564c-12.988 0-25.992 18.815-36.75 8.3-10.757-10.513 3.993-29.583 3.993-43.504 0-13.922-14.27-24.15-14.27-62.988s14.27-52.794 14.27-68.588c0-15.793-12.7-24.445-3.992-33.806 8.707-9.362 20.295 3.434 34.859 5.71C134.2 167.834 168.019 150 217.075 150c49.056 0 93.218 15.56 96.856 15.56z"
          stroke="#FFF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M149.985 308.413c.08.128.209.26.384.396a5.306 5.306 0 00-.295-.003c-.158.003-.248.018-.232.007.158-.1.185-.292.149-.385zm.384.396c3.51 2.713 25.4 6.695 34.16 5.157 3.639-.64 6.521-1.42 9.084-2.386a45.521 45.521 0 003.216-1.364c.32-.148 1.394-.653 1.377-.645.534-.25.932-.431 1.322-.6 1.567-.681 2.888-1.1 4.442-1.358 5.864-.976 17.324-.976 24.25-.002 2.887.406 5.536 1.218 10.408 3.016.193.07.34.125.681.251 5.143 1.903 7.357 2.618 10.059 3.093 10.489 1.844 31.072-1.324 34.315-5.284-.592.163-1.51.433-1.712.487-3.643.976-6.903.987-10.257-.617-6.298-3.012-13.774-7.723-17.932-11.146-.66-.542-1.367-1.183-2.307-2.075-.293-.278-1.982-1.902-2.484-2.376-3.55-3.352-6.024-5.153-8.538-5.858-2.69-.754-4.239-.754-12.988-.292-3.996.21-6.98.31-10.465.31-3.48 0-6.493-.098-10.68-.31-9.12-.462-10.922-.462-13.622.292-2.471.69-4.492 2.291-7.938 5.843l-.775.802c-.311.32-.544.56-.772.792a48.425 48.425 0 01-1.544 1.514c-.565.526-1.09.977-1.6 1.37-4.62 3.55-9.161 6.489-14.904 9.5-.775.407-1.581.751-2.417 1.038-3.303 1.134-6.436 1.301-10.554.981-.135-.01-1.038-.084-1.26-.1a16.11 16.11 0 00-.565-.033z"
          stroke="#FFF"
          fill="#FFF"
        />
        <Path
          d="M195.416 234.48h42.78"
          stroke="#1C1C1C"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G transform="translate(143.5 221)">
          <Use fill="#2D2D2D" xlinkHref="#prefix__a" />
          <Path
            d="M26.956.5L6 21.326 26.956.5zM40.021 4L18.5 26"
            stroke="#373737"
            strokeWidth={10}
            strokeLinecap="square"
          />
          <Use
            stroke="#000"
            strokeWidth={3}
            strokeLinejoin="round"
            xlinkHref="#prefix__b"
          />
          <Use stroke="#000" strokeWidth={7.5} xlinkHref="#prefix__c" />
        </G>
        <G transform="translate(233.5 221)">
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
            stroke="#000"
            strokeWidth={3}
            strokeLinejoin="round"
            xlinkHref="#prefix__e"
          />
          <Use stroke="#000" strokeWidth={7.5} xlinkHref="#prefix__f" />
        </G>
        <G>
          <Path
            d="M155.248 159.103c-1.652 1.265-3.103 1.897-4.353 1.897-1.25 0-2.5-.632-3.75-1.897-15.286-15.969-23.32-25.5-24.1-28.594-1.17-4.64 20.71-35.435 22.102-38.053 1.39-2.619.052-4.756 1.998-7.307 1.947-2.55 5.022-4.24 7.5-5.139 2.477-.9 12.804-2.509 27.095-7.425 14.29-4.917 25.792-10.784 27.095-11.219.868-.29 3-.408 6.398-.353 3.627.009 5.802.127 6.524.353 1.083.34 11.114 5.418 29.158 11.17 18.044 5.751 26.896 6.687 29.063 7.474 2.168.787 4.499 2.543 5.695 5.14 1.195 2.596 1.195 5.514 2.157 7.306.96 1.792 22.17 33.91 22.17 38.053 0 2.763-8.52 12.294-25.56 28.594-1.025 1.265-2.266 1.897-3.722 1.897s-2.94-.632-4.45-1.897h-121.02z"
            stroke="#FFF"
            fill="#FFF"
          />
          <Path
            d="M153.452 162.014c0-2.367 32.151-11.482 64.302-11.482 32.15 0 62.273 8.81 62.273 11.482 0 2.673-15.106 22.892-62.273 22.892s-64.302-20.526-64.302-22.892z"
            stroke="#2D2D2D"
            fill="#2D2D2D"
          />
          <Path
            d="M153.13 162.196c20.922-6.443 42.065-9.664 63.432-9.664 21.366 0 42.626 3.201 63.782 9.603l-.11-9.98c-21.082-12.54-42.306-18.81-63.672-18.81-21.367 0-42.492 6.27-63.375 18.81l-.056 10.04z"
            fill="#1C1C1C"
          />
          <G fill="#000">
            <Path d="M153.307 151.766c1.593.13 2.997 2.635 2.631 4.852-.366 2.216-2.428 3.86-4.046 3.728-1.618-.132-3.223-1.927-2.833-4.29.39-2.364 2.655-4.42 4.248-4.29zM280.172 151.766c-1.593.13-2.997 2.635-2.631 4.852.365 2.216 2.428 3.86 4.046 3.728 1.618-.132 3.223-1.927 2.833-4.29-.39-2.364-2.655-4.42-4.248-4.29z" />
            <Path d="M153.585 153.601c-.177-8.449-.177-12.817 0-13.105.266-.432 31.72-22.496 63.439-22.496s63.036 21.933 63.438 22.496c.268.375.268 4.743 0 13.105-21.146-7.498-42.292-11.248-63.438-11.248-21.147 0-42.293 3.75-63.439 11.248z" />
          </G>
          <Path
            d="M196.494 76.742c.081-.572 4.694-5.877 4.974-5.995.28-.119 3.427 1.43 6.854.993 3.427-.437 6.282-2.74 6.854-2.74.572 0 3.527 2.303 7.054 2.74 3.527.437 6.582-1.186 7.054-.993.472.192 5.13 5.423 5.222 5.995.092.572-3.11 3.84-3.05 7.56.042 2.68 2.555 7.563 3.202 10.333.866 3.713-.126 6.982-.635 8.406C230.038 114.169 220.112 116 215.5 116s-14.538-1.831-18.523-12.96c-.51-1.423-1.501-4.692-.635-8.405.647-2.77 3.16-7.652 3.203-10.333.06-3.72-3.132-6.989-3.05-7.56z"
            fill="#000"
          />
        </G>
      </G>
    </AnimatedSvg>
  );
};
