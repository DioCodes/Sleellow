import React, { useState } from "react";
import { Text, StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { MainScreen } from "../screens/MainScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { StatsScreen } from "../screens/StatsScreen";

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  // const [focused, setFocused] = useState(false);

  const Main = () => {
    return <MainScreen />;
  };
  // const ttt = ;
  const Label = ({ name, props }) => <Text {...props}>{name}</Text>;

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let fontStyle;
            let fontSize;
            let fontColor;
            let unFocusColor = "rgba(255, 255, 255, 0.5)";

            let focusSetting = () => {
              fontStyle = focused ? "norms-bold" : "norms-regular";
              fontColor = focused ? "white" : unFocusColor;
              fontSize = focused ? 18 : 17;
            };

            if (route.name === "stats") {
              iconName = "stats";
              focusSetting();
            } else if (route.name === "main") {
              iconName = "main";
              focusSetting();
            } else if (route.name === "profile") {
              iconName = "profile";
              focusSetting();
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
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          tabStyle: {
            maxWidth: 70,
          },
          style: {
            alignItems: "center",
            paddingRight: "5%",
            backgroundColor: "black",
            borderTopColor: "rgba(255, 255, 255, 0.35)",
            borderTopWidth: 0.5,
          },
          showLabel: false,
        }}
        listeners={{
          tabPress: Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
        }}
      >
        <Tab.Screen name="stats" component={StatsScreen} />
        <Tab.Screen name="main" component={Main} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
