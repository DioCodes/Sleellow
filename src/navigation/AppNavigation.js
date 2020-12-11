import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  AsyncStorage,
  Button,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import Constants from "expo-constants";

import theme from "../theme";
import MainScreen from "../screens/MainScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { TabBarBtn } from "../components/TabBarBtn";
import { SleepTimeScreen } from "../screens/SleepTimeScreen";
import SleepScreen from "../screens/breathing_practices/Sleep/SleepScreen";
import SleepScreen_Info from "../screens/breathing_practices/Sleep/SleepScreen_Info";
import { WakeUpScreen } from "../screens/breathing_practices/WakeUp/WakeUpScreen";
import { BreathingPractices } from "../screens/breathing_practices/BreathingPractices";
import { PremiumScreen } from "../screens/PremiumScreen";
import { PrepareForSleep } from "../screens/PrepareForSleep";
import { DailyMantraScreen } from "../components/DailyMantra/DailyMantaScreen";
import { t } from "../../assets/lang";
import { NapScreen } from "../screens/NapScreen";
import { NapScreen_Info } from "../screens/NapScreen_Info";
import { SleepTimeScreen_New } from "../screens/SleepTimeScreen_New";

//// сделай отдельный компонент из табБара

export const AppNavigation = ({ navigation, route }) => {
  const [screen, setScreen] = useState("PremiumScreen");

  const statusBarHeight = Constants.statusBarHeight;
  const wh = Dimensions.get("window").height;

  const modalOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureResponseDistance: {
      vertical: wh,
    },
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
    ...TransitionPresets.ModalPresentationIOS,
  };

  const modalWithPicker = {
    gestureResponseDistance: {
      vertical: wh,
    },
  };

  useEffect(() => {
    getScreen();
  });

  let getScreen = async () => {
    let value = await AsyncStorage.getItem("@PremiumScreen:key");
    try {
      if (value == "purchased") {
        setScreen("Main");
      } else {
        setScreen("PremiumScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Stack = createStackNavigator();
  const NestedStack = createStackNavigator();
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

  const NestedSleepStackScreen = () => {
    return (
      <NestedStack.Navigator
        initialRouteName="SleepScreen"
        mode="modal"
        headerMode="screen"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerShown: false,
          headerBackTitle: t("back_C"),
          headerTintColor: "#fff",
          gestureEnabled: false,
        }}
      >
        <NestedStack.Screen
          name="SleepScreen"
          component={SleepScreen}
          options={{
            cardOverlayEnabled: true,
            headerShown: true,
            // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            // ...TransitionPresets.ModalPresentationIOS,
          }}
        />
        <NestedStack.Screen
          name="Sleep_Info"
          component={SleepScreen_Info}
          options={{
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: wh,
            },
            cardOverlayEnabled: true,
            // cardStyleInterpolator:CardStyleInterpolatorsforModalPresentationIOS,
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
      </NestedStack.Navigator>
    );
  };

  const NestedNapStackScreen = () => {
    return (
      <NestedStack.Navigator
        initialRouteName="NapScreen"
        mode="modal"
        headerMode="screen"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerShown: false,
          headerBackTitle: t("back_C"),
          headerTintColor: "#fff",
          gestureEnabled: false,
        }}
      >
        <NestedStack.Screen
          name="NapScreen"
          component={NapScreen}
          options={{
            cardOverlayEnabled: true,
            headerShown: true,
          }}
        />
        <NestedStack.Screen
          name="Nap_Info"
          component={NapScreen_Info}
          options={{
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: wh,
            },
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
      </NestedStack.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={screen}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerTitle: null,
          headerShown: false,
          headerBackTitle: t("back_C"),
          headerTintColor: "#fff",
        }}
        headerMode="screen"
      >
        <Stack.Screen
          name="PremiumScreen"
          component={PremiumScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: wh,
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        {/* <Stack.Screen name="SleepTime" component={SleepTimeScreen} /> */}
        <Stack.Screen name="SleepTime" component={SleepTimeScreen_New} />
        <Stack.Screen name="WakeUpScreen" component={WakeUpScreen} />
        <Stack.Screen
          name="NestedSleepStack"
          component={NestedSleepStackScreen}
        />
        <Stack.Screen
          name="NestedNapStackScreen"
          component={NestedNapStackScreen}
        />
        <Stack.Screen
          name="BreathingPractices"
          component={BreathingPractices}
        />
        <Stack.Screen
          name="PrepareForSleepModal"
          component={PrepareForSleep}
          options={{
            ...modalOptions,
            ...modalWithPicker,
          }}
        />
        <Stack.Screen
          name="MantraModal"
          component={DailyMantraScreen}
          options={modalOptions}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainStack />
    </NavigationContainer>
  );
};
