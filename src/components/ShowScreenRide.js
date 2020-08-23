import React, { useRef } from "react";
import { View, StyleSheet, Animated, SafeAreaView, Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import theme from "../theme";

export const ShowScreenRide = ({ children }) => {
  const isFocused = useIsFocused();

  let showScreen = useRef(new Animated.Value(0)).current;
  let topToBtmRide = useRef(new Animated.Value(-25)).current;

  const showBar = () => {
    Animated.parallel([
      Animated.timing(showScreen, {
        duration: 600,
        toValue: 1,
        useNativeDriver: false
      }),
      Animated.timing(topToBtmRide, {
        duration: 600,
        toValue: 0,
        useNativeDriver: false
      }),
    ]).start();
  };

  const hideBar = () => {
    Animated.parallel([
      Animated.timing(showScreen, {
        duration: 500,
        toValue: 0,
        useNativeDriver: false
      }),
      Animated.timing(topToBtmRide, {
        duration: 600,
        toValue: -25,
        useNativeDriver: false
      }),
    ]).start();
  };

  if (isFocused) {
    showBar();
  } else {
    hideBar();
  }

  return (
    <SafeAreaView style={styles.center}>
      <Animated.View
        style={{
          ...styles.screenContainer,
          opacity: showScreen,
          bottom: topToBtmRide,
        }}
      >
        {children}
      </Animated.View>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR
    // paddingTop: "10%",
  },
  screenContainer: {
    flex: 1,
  },
});
