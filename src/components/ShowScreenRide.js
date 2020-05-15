import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export const ShowScreenRide = ({ children }) => {
  const isFocused = useIsFocused();

  let showScreen = useRef(new Animated.Value(0)).current;
  let topToBtmRide = useRef(new Animated.Value(50)).current;

  const showBar = () => {
    Animated.parallel([
      Animated.timing(showScreen, {
        duration: 1000,
        toValue: 1,
      }),
      Animated.timing(topToBtmRide, {
        duration: 600,
        toValue: 0,
      }),
    ]).start();
  };

  const hideBar = () => {
    Animated.parallel([
      Animated.timing(showScreen, {
        duration: 100,
        toValue: 0,
      }),
      Animated.timing(topToBtmRide, {
        duration: 100,
        toValue: 50,
      }),
    ]).start();
  };

  if (isFocused) {
    showBar();
  } else {
    hideBar();
  }

  return (
    <View style={styles.center}>
      <Animated.View
        style={{
          ...styles.screenContainer,
          opacity: showScreen,
          bottom: topToBtmRide,
        }}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#000",
    // paddingTop: "10%",
  },
  screenContainer: {
    flex: 1,
  },
});
