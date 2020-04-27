import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppLoading } from "expo";
import { StatusBar, AsyncStorage } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { MainScreen } from "../screens/MainScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { StatsScreen } from "../screens/StatsScreen";
import { WelcomeScreens } from "../screens/WelcomeScreens";
import { LoginScreen } from "../screens/LoginScreen";
import { AuthScreen } from "../screens/AuthScreen";
import { TabBarBtn } from "../components/TabBarBtn";
import { loginUser } from "../store/actions/userAction";

//// сделай отдельный компонент из табБара

export const AppNavigation = ({ navigation }) => {
  const [isLogged, setIsLogged] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loginUser());
  // }, [dispatch]);

  // const user = useSelector((state) => state.user.userData);
  // console.log(user.firstEnter);

  // if (!isLogged) {
  //   return (
  //     <AppLoading
  //       startAsync={login}
  //       onFinish={() => {
  //         setIsLogged(true);
  //         console.log(user);
  //       }}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

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
        // lazy={false}
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
            borderTopColor: "rgba(255, 255, 255, 0.35)",
            borderTopWidth: 0.5,
          },
          showLabel: false,
        }}
      >
        <Tab.Screen name="stats" component={StatsScreen} listeners={tabPress} />
        <Tab.Screen name="main" component={MainScreen} listeners={tabPress} />
        <Tab.Screen name="you" component={ProfileScreen} listeners={tabPress} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        // initialRouteName={isLogged ? "Main" : "Welcome"}
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Welcome" component={WelcomeScreens} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
