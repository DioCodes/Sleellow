import React, { useState, useRef } from "react";
import { TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import theme from "../theme";

export const ShowContainerButton = ({ onPressHandler }) => {
  const [rotated, setRotated] = useState(false)
  let transform = useRef(new Animated.Value(1)).current;

  let rotateButton = () => {
    Animated.timing(transform, {
      toValue: rotated ? 1 : -1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const onPressAction = () => {
    onPressHandler(rotated)
  }

  return (
    <TouchableOpacity
      activeOpacity={theme.ACTIVE_OPACITY}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        rotateButton();
        setRotated(prev => !prev)
        // onPressHandler(rotated);
        onPressAction()
      }}
    >
      <Animated.View style={{ transform: [{ scaleY: transform }] }}>
        <Ionicons
          name="ios-arrow-down"
          size={18}
          color="rgba(255, 255, 255, .25)"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
