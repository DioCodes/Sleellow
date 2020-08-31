import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useHeaderHeight } from "@react-navigation/stack";

import { AppHeaderIcon } from "./AppHeaderIcon";
import { t } from "../../assets/lang";
import theme from '../theme';

const Header = ({navigation}) => {
  return (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        iconName="ios-close-circle-outline"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </HeaderButtons>
)}

export const HeaderModal = (navigation, header, icon) => (
  {
    headerShown: true,
    headerTitle: header,
    headerLeft: () => {},
    headerRight: () => (
      <Header navigation={navigation} />
    ),
    headerStatusBarHeight: 0,
    headerStyle: {
      backgroundColor: theme.PRIMARY_COLOR,
      shadowColor: "transparent",
      elevation: 0,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255, 255 , 255, .05)"
    }
  }
)
