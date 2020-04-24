import React from "react";
import { Text } from "react-native";

export const TabBarBtn = ({ focused, route }) => {
  let iconName;
  let fontStyle;
  let fontSize;
  let fontColor;
  let unFocusColor = "rgba(255, 255, 255, 0.5)";

  let focusSettings = () => {
    fontStyle = focused ? "norms-bold" : "norms-regular";
    fontColor = focused ? "white" : unFocusColor;
    fontSize = focused ? 18 : 17;
  };

  if (route.name === "stats") {
    iconName = "stats";
    focusSettings();
  } else if (route.name === "main") {
    iconName = "main";
    focusSettings();
  } else if (route.name === "you") {
    iconName = "you";
    focusSettings();
  }

  return (
    <Text
      style={{
        fontFamily: fontStyle,
        fontSize: fontSize,
        color: fontColor,
      }}
    >
      {iconName}
    </Text>
  );
};
