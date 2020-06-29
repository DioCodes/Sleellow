import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import theme from "../theme";
import { Easing } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";

export const ProgressBar = ({ duration, width }) => {
  let animation = useRef(new Animated.Value(0)).current;

  const barLoading = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: duration,
      }),
    ]).start();
  };

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    barLoading();
  }, []);

  return (
    <View style={{ flexDirection: "row", height: 10 }}>
      <View style={{ width: width, ...styles.progressBar }}>
        <Animated.View
          style={{
            flex: 1,
            width: widthInterpolated,
            backgroundColor: theme.TERTIARY_COLOR,
            borderRadius: 15,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderWidth: 1,
    borderRadius: 15,
  },
});
