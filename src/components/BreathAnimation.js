import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import * as Haptics from "expo-haptics";
import theme from "../theme";
import { useIsFocused } from "@react-navigation/native";
import { ProgressBar } from "./ProgressBar";

export const BreathAnimation = ({ paused }) => {
  let isFocused = useIsFocused();

  let intervalHaptics = useRef(null);
  let timeOutHaptics = useRef(null);
  let timeOutHaptics2 = useRef(null);
  let timeOutHaptics3 = useRef(null);

  let animatedShowText_Inhale = useRef(new Animated.Value(0)).current;
  let animatedShowText_Hold = useRef(new Animated.Value(0)).current;
  let animatedShowText_Exhale = useRef(new Animated.Value(0)).current;
  let animatedSize = useRef(new Animated.Value(1)).current;
  let animatedSizeThree = useRef(new Animated.Value(1)).current;
  let animatedSizeFour = useRef(new Animated.Value(1)).current;

  const easing = Easing.in;
  const easingOut = Easing.out;

  let r = useRef(
    Animated.sequence([
      Animated.parallel([
        Animated.timing(animatedSize, {
          duration: 4000,
          toValue: 1.2,
          easing,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSizeThree, {
          duration: 4000,
          toValue: 1.3,
          easing,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSizeFour, {
          duration: 4000,
          toValue: 1.4,
          easing,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(animatedShowText_Inhale, {
            duration: 3800,
            toValue: 1,
            easing,
            useNativeDriver: true,
          }),
          Animated.timing(animatedShowText_Inhale, {
            duration: 100,
            toValue: 0,
            easing,
            useNativeDriver: true,
          }),
          Animated.timing(animatedShowText_Hold, {
            duration: 100,
            toValue: 1,
            easing,
            useNativeDriver: true,
          }),
        ]),
      ]),
      Animated.delay(7000),
      Animated.parallel([
        Animated.sequence([
          Animated.timing(animatedShowText_Hold, {
            duration: 100,
            toValue: 0,
            easing,
            useNativeDriver: true,
          }),
          Animated.timing(animatedShowText_Exhale, {
            duration: 100,
            toValue: 1,
            easing,
            useNativeDriver: true,
          }),
          Animated.timing(animatedShowText_Exhale, {
            duration: 7800,
            toValue: 0,
            easing,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(animatedSize, {
          duration: 8000,
          toValue: 1,
          easingOut,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSizeThree, {
          duration: 8000,
          toValue: 1,
          easingOut,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSizeFour, {
          duration: 8000,
          toValue: 1,
          easingOut,
          useNativeDriver: true,
        }),
      ]),
    ])
  ).current;

  const activateHaptics = () => {
    timeOutHaptics.current = setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }, 4000);
    timeOutHaptics2.current = setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }, 11000);
    timeOutHaptics3.current = setTimeout(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }, 19000);
  };

  useEffect(() => {
    if (paused || !isFocused) {
      animatedSize.setValue(1);
      animatedSizeThree.setValue(1);
      animatedSizeFour.setValue(1);
      animatedShowText_Inhale.setValue(0);
      animatedShowText_Hold.setValue(0);
      animatedShowText_Exhale.setValue(0);
      clearInterval(intervalHaptics.current);
      clearTimeout(timeOutHaptics.current);
      clearTimeout(timeOutHaptics2.current);
      clearTimeout(timeOutHaptics3.current);
    } else if (!paused) {
      Animated.loop(r).start();
      activateHaptics();
      intervalHaptics.current = setInterval(() => {
        activateHaptics();
      }, 19000);
    }

    return () => {
      clearInterval(intervalHaptics.current);
      clearTimeout(timeOutHaptics.current);
      clearTimeout(timeOutHaptics2.current);
      clearTimeout(timeOutHaptics3.current);
    };
  }, [paused, isFocused]);

  return (
    <View style={styles.main}>
      <View style={styles.circle}>
        <Animated.Text
          style={{ ...styles.buttonText, opacity: animatedShowText_Inhale }}
        >
          Inhale
        </Animated.Text>
        <Animated.Text
          style={{ ...styles.buttonText, opacity: animatedShowText_Hold }}
        >
          Hold
        </Animated.Text>
        <Animated.Text
          style={{ ...styles.buttonText, opacity: animatedShowText_Exhale }}
        >
          Exhale
        </Animated.Text>
        <Animated.View
          style={{
            ...styles.circle,
            ...styles.circleTwo,
            transform: [{ scale: animatedSize }],
          }}
        ></Animated.View>
        <Animated.View
          style={{
            ...styles.circle,
            ...styles.circleThree,
            transform: [{ scale: animatedSizeThree }],
          }}
        ></Animated.View>
        <Animated.View
          style={{
            ...styles.circle,
            ...styles.circleFour,
            transform: [{ scale: animatedSizeFour }],
          }}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "norms-bold",
    color: theme.PRIMARY_COLOR,
    // color: theme.SECONDARY_COLOR,
    fontSize: 22,
    zIndex: 1,
    position: "absolute",
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: theme.SECONDARY_COLOR,
    // borderColor: theme.TERTIARY_COLOR,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  circleTwo: {
    position: "absolute",
    height: 170,
    width: 170,
    opacity: 0.4,
  },
  circleThree: {
    position: "absolute",
    height: 190,
    width: 190,
    opacity: 0.25,
  },
  circleFour: {
    position: "absolute",
    height: 210,
    width: 210,
    opacity: 0.1,
  },
});
