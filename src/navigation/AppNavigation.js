import React, { useEffect, useState } from "react";
import { View, StatusBar, AsyncStorage, Button, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import Constants from 'expo-constants';

import theme from "../theme";
import MainScreen from "../screens/MainScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { WelcomeScreens } from "../screens/WelcomeScreens";
import { TabBarBtn } from "../components/TabBarBtn";
import { SleepTimeScreen } from "../screens/SleepTimeScreen";
import SleepScreen from "../screens/breathing_practices/Sleep/SleepScreen";
import SleepScreen_Info from "../screens/breathing_practices/Sleep/SleepScreen_Info";
import { WakeUpScreen } from "../screens/breathing_practices/WakeUp/WakeUpScreen";
import { BreathingPractices } from "../screens/breathing_practices/BreathingPractices";
import { PremiumScreen } from "../screens/PremiumScreen";
import { PrepareForSleep } from "../components/PrepareForSleep";
import { DailyMantraScreen } from "../components/DailyMantra/DailyMantaScreen";
import { t } from "../../assets/lang";

//// сделай отдельный компонент из табБара

export const AppNavigation = ({ navigation, route }) => {
  const [screen, setScreen] = useState("Welcome");

  const statusBarHeight = Constants.statusBarHeight;

  const modalOptions = {
    headerShown: false,
    gestureEnabled: true,
    gestureResponseDistance: {
      vertical: Dimensions.get("window").height 
    },
    cardOverlayEnabled: true,
    safeAreaInsets: {
      top: Dimensions.get("window").height > 800 ? Constants.statusBarHeight : Constants.statusBarHeight + 10
    },
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
    ...TransitionPresets.ModalPresentationIOS,
  }

  useEffect(() => {
    getScreen();
  });

  let getScreen = async () => {
    let value = await AsyncStorage.getItem("@WelcomeScreen:key");
    try {
      if (value == "purchased") {
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
          }
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
        initialRouteName="PremiumScreen"
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
        <Stack.Screen
          name="PremiumScreen"
          component={PremiumScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: Dimensions.get("window").height 
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ 
            headerShown: false, 
            safeAreaInsets: {
              top: Dimensions.get("window").height > 800 ? Constants.statusBarHeight : Constants.statusBarHeight + 10
            }
          }}
        />
        <Stack.Screen name="SleepTime" component={SleepTimeScreen} />
        <Stack.Screen name="SleepScreen" component={SleepScreen} />
        <Stack.Screen name="WakeUpScreen" component={WakeUpScreen} />
        <Stack.Screen name="SleepScreen_Info" component={SleepScreen_Info} />
        <Stack.Screen name="BreathingPractices" component={BreathingPractices} />
        <Stack.Screen 
          name="PrepareForSleepModal"
          component={PrepareForSleep}
          options={modalOptions}
        />
        <Stack.Screen 
          name="MantraModal"
          component={DailyMantraScreen}
          options={modalOptions}
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
          headerBackTitle: t("back_C"),
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="PremiumScreen"
          component={PremiumScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureResponseDistance: {
              vertical: Dimensions.get("window").height 
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreens} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ 
            headerShown: false, 
            safeAreaInsets: {
              top: Dimensions.get("window").height > 800 ? Constants.statusBarHeight : Constants.statusBarHeight + 10,
            },
            // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen name="SleepTime" component={SleepTimeScreen} />
        <Stack.Screen name="SleepScreen" component={SleepScreen} />
        <Stack.Screen name="WakeUpScreen" component={WakeUpScreen} />
        <Stack.Screen name="SleepScreen_Info" component={SleepScreen_Info} />
        <Stack.Screen name="BreathingPractices" component={BreathingPractices} />
        <Stack.Screen 
          name="PrepareForSleepModal"
          component={PrepareForSleep}
          options={modalOptions}
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
        {screen == "Main" ? <MainStack /> : <WelcomeStack />}
        {/* {screen == "Main" ? <WelcomeStack /> : <WelcomeStack />} */}
      </NavigationContainer>
  );
};
