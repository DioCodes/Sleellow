import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import theme from "../theme";
import { Ionicons } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={26}
    IconComponent={Ionicons}
    color={theme.SECONDARY_COLOR}
  />
);
