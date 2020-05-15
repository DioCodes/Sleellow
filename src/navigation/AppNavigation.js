import React, { useEffect, useState } from "react";
import { View, StatusBar, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { MainScreen } from "../screens/MainScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";

import { WelcomeScreens } from "../screens/WelcomeScreens";
import { TabBarBtn } from "../components/TabBarBtn";
import { FindSleepTimeScreen } from "../screens/FindSleepTimeScreen";

//// сделай отдельный компонент из табБара

export const AppNavigation = ({ navigation }) => {
  const [screen, setScreen] = useState("Welcome");

  useEffect(() => {
    getScreen();
  });

  let getScreen = async () => {
    let value = await AsyncStorage.getItem("@WelcomeScreen:key");
    try {
      if (value == "firstEnter") {
        console.log(value);
        setScreen("Main");
      } else {
        setScreen("Welcome");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const tabPress = () => {
    return {
      tabPress: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      },
    };
  };

  const MainTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="main"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return <TabBarBtn focused={focused} route={route} />;
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
            borderTopColor: "rgba(255, 255, 255, .25)",
            borderTopWidth: 0.25,
          },
          showLabel: false,
        }}
      >
        <Tab.Screen name="main" component={MainScreen} listeners={tabPress} />
        <Tab.Screen name="you" component={ProfileScreen} listeners={tabPress} />
      </Tab.Navigator>
    );
  };

  const WelcomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreens} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="FindTime" component={FindSleepTimeScreen} />
      </Stack.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
            shadowColor: "transparent",
            // shadowColor: "#fff",
            elevation: 0,
          },
          headerBackTitle: "Back",
          headerTitle: "",
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreens} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainTabNavigator}
        />
        <Stack.Screen name="FindTime" component={FindSleepTimeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {screen == "Main" ? <MainStack /> : <WelcomeStack />}
      {/* {screen == "Main" ? <WelcomeStack /> : <WelcomeStack />} */}
    </NavigationContainer>
  );
};
