import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import theme from "../../theme";
import Constants from "expo-constants";
import { useIsFocused } from "@react-navigation/native";

const Particle = ({ parentHeight, parentWidth, stopAnim, size }) => {
  //
  // TODO:
  //  blur effect
  //

  const startHeight = Constants.statusBarHeight;
  let reversed = false;

  const randomIntFromInterval = (min, max) => {
    return Number(Math.floor(Math.random() * (max - min + 1) + min));
  };
  const randomFloat = (min, max) => {
    return Number((Math.random() * (max - min)).toFixed(2));
  };

  const randomParticleSize = useRef(
    new Animated.Value(randomIntFromInterval(15, size))
  ).current;
  const animatedOpacity = useRef(new Animated.Value(randomFloat(0, 1))).current;
  const animatedTranslateX = useRef(
    new Animated.Value(
      randomIntFromInterval(startHeight, parentWidth - startHeight)
    )
  ).current;
  const animatedTranslateY = useRef(
    new Animated.Value(
      randomIntFromInterval(startHeight, parentHeight - startHeight)
    )
  ).current;
  const animationTiming = randomIntFromInterval(5000, 10000);

  const loopBouncingAnimate = () => {
    let time = animationTiming;
    reversed = !reversed;
    let easing = Easing.elastic(0);

    Animated.parallel([
      Animated.timing(animatedTranslateX, {
        toValue: randomIntFromInterval(startHeight, parentWidth - startHeight),
        duration: time,
        useNativeDriver: true,
        easing,
      }),
      Animated.timing(animatedTranslateY, {
        toValue: randomIntFromInterval(startHeight, parentHeight - startHeight),
        duration: time,
        useNativeDriver: true,
        easing,
      }),

      Animated.timing(animatedOpacity, {
        toValue: reversed ? 0 : 1,
        duration: time,
        useNativeDriver: true,
      }),
      Animated.timing(randomParticleSize, {
        toValue: reversed ? 10 : randomIntFromInterval(15, size),
        duration: time,
        useNativeDriver: true,
        easing,
      }),
    ]).start(() => {
      loopBouncingAnimate();
    });
  };

  let opacity = animatedOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 1],
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      loopBouncingAnimate();
    });
  }, []);

  let rc = () => {
    let r = randomIntFromInterval(0, 1);
    let color;
    if (r == 0) {
      color = theme.TERTIARY_COLOR;
    } else if (r == 1) {
      color = theme.QUATERNARY_COLOR;
    }
    return color;
  };

  let randomColor = rc();

  return (
    <Animated.View
      style={{
        transform: [
          { translateX: animatedTranslateX },
          { translateY: animatedTranslateY },
          { scale: randomParticleSize },
        ],
        ...styles.container,
        backgroundColor: "white",
        shadowColor: "white",

        opacity: opacity,
      }}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 1,
    height: 1,
    borderRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0.1,
  },
});

export default Particle;
