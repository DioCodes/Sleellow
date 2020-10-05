import React, { useRef } from "react";
import { TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import theme from "../theme";

export const UpdateButton = ({ onPressHandler }) => {
  let rotate = useRef(new Animated.Value(0)).current;
  let spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  let rotateButton = () => {
    Animated.timing(rotate, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(rotate.setValue(0));
  };

  return (
    <TouchableOpacity
      activeOpacity={theme.ACTIVE_OPACITY}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        rotateButton();
        onPressHandler();
      }}
    >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Ionicons
          name="ios-refresh"
          size={18}
          color="rgba(255, 255, 255, .25)"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
