import React, { useEffect, useState } from "react";
import { View, StatusBar, AsyncStorage, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";

import theme from "../theme";
import MainScreen from "../screens/MainScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { WelcomeScreens } from "../screens/WelcomeScreens";
import { TabBarBtn } from "../components/TabBarBtn";
import { SleepTimeScreen } from "../screens/SleepTimeScreen";
import SleepScreen from "../screens/BreathingPractices/Sleep/SleepScreen";
import SleepScreen_Info from "../screens/BreathingPractices/Sleep/SleepScreen_Info";
import { WakeUpScreen } from "../screens/BreathingPractices/WakeUp/WakeUpScreen";
import { BreathingPractices } from "../screens/BreathingPractices/BreathingPractices";

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
            backgroundColor: theme.PRIMARY_COLOR,
            borderTopColor: "rgba(255, 255, 255, .1)",
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
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerTitle: null,
          headerBackTitle: "Back",
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreens} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainTabNavigator}
        />
        <Stack.Screen name="SleepTime" component={SleepTimeScreen} />

        <Stack.Screen name="BreathSleepScreen" component={SleepScreen} />
        <Stack.Screen
          name="BreathSleepScreen_Info"
          component={SleepScreen_Info}
        />
        <Stack.Screen
          name="BreathingPractices"
          component={BreathingPractices}
        />
      </Stack.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerTitle: null,
          headerBackTitle: "Back",
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreens} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainTabNavigator}
        />
        <Stack.Screen name="SleepTime" component={SleepTimeScreen} />

        <Stack.Screen name="SleepScreen" component={SleepScreen} />
        <Stack.Screen name="WakeUpScreen" component={WakeUpScreen} />
        <Stack.Screen name="SleepScreen_Info" component={SleepScreen_Info} />
        <Stack.Screen
          name="BreathingPractices"
          component={BreathingPractices}
        />
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
