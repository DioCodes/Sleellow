import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import theme from "../theme";

export const CircleMoveAnimation = ({ paused }) => {
  let rotateTwo = useRef(new Animated.Value(0)).current;
  let showCircle = useRef(new Animated.Value(0.5)).current;
  let x = useRef(new Animated.Value(0.9)).current;
  let y = useRef(new Animated.Value(0.9)).current;
  let xTwo = useRef(new Animated.Value(0.9)).current;
  let yTwo = useRef(new Animated.Value(0.9)).current;
  let xThree = useRef(new Animated.Value(0.9)).current;
  let yThree = useRef(new Animated.Value(0.9)).current;

  let spin = rotateTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  let loopCircleAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(rotateTwo, {
          toValue: 1,
          duration: 6000,
          easing: Easing.in,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.delay(1500),
          Animated.timing(showCircle, {
            toValue: 1,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true,
          }),
          Animated.parallel([
            Animated.timing(y, {
              toValue: 0.95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(x, {
              toValue: 0.9,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(yTwo, {
              toValue: 0.9,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(xTwo, {
              toValue: 0.95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            // Animated.timing(yThree, {
            //   toValue: .9,
            //   duration: 3000,
            //   easing: Easing.in,
            //   useNativeDriver: true
            // }),
            // Animated.timing(xThree, {
            //   toValue: .9,
            //   duration: 3000,
            //   easing: Easing.in,
            //   useNativeDriver: true
            // }),
          ]),

          Animated.parallel([
            Animated.timing(y, {
              toValue: 0.9,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(x, {
              toValue: 0.95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(yTwo, {
              toValue: 0.95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            Animated.timing(xTwo, {
              toValue: 0.95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true,
            }),
            // Animated.timing(yThree, {
            //   toValue: .9,
            //   duration: 3000,
            //   easing: Easing.in,
            //   useNativeDriver: true
            // }),
            // Animated.timing(xThree, {
            //   toValue: .9,
            //   duration: 3000,
            //   easing: Easing.in,
            //   useNativeDriver: true
            // }),
          ]),
          Animated.timing(rotateTwo, {
            toValue: 0,
            duration: 0,
            easing: Easing.in,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  };

  let stopAnimation = () => {
    Animated.parallel([
      Animated.timing(rotateTwo, {
        toValue: 0,
        duration: 6000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(showCircle, {
        toValue: 0.5,
        duration: 6000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(y, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(x, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(yTwo, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(xTwo, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(yThree, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(xThree, {
        toValue: 0.9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (paused) {
      stopAnimation();
    } else if (!paused) {
      loopCircleAnimation();
    }
  }, [paused]);

  return (
    <Animated.View
      style={{
        ...styles.main,
        transform: [{ rotate: spin }],
        opacity: showCircle,
        // ...styles.circleShadow,
      }}
    >
      <Animated.View
        style={{
          ...styles.circle,
          ...styles.circleTwo,
          transform: [{ scaleX: x }, { scaleY: y }],
        }}
      />
      <Animated.View
        style={{
          ...styles.circle,
          ...styles.circleTwo,
          transform: [{ scaleX: xTwo }, { scaleY: yTwo }],
        }}
      />
      <Animated.View
        style={{
          ...styles.circle,
          ...styles.circleTwo,
          transform: [{ scaleX: xThree }, { scaleY: yThree }],
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    height: 300,
  },
  circle: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  circleTwo: {
    borderColor: "rgba(255, 255, 255, .1)",
    shadowColor: "rgba(255,255,255, .75)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
  },
  circleShadow: {
    borderColor: "rgba(250, 0, 25, 1)",
    shadowColor: "rgba(255,255,255, 1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});
