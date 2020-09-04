import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'


export const CircleMoveAnimation = ({ paused }) => {
  let rotateTwo = useRef(new Animated.Value(0)).current;
  let x = useRef(new Animated.Value(1)).current;
  let y = useRef(new Animated.Value(1)).current;
  let xTwo = useRef(new Animated.Value(1)).current;
  let yTwo = useRef(new Animated.Value(1)).current;
  let xThree = useRef(new Animated.Value(1)).current;
  let yThree = useRef(new Animated.Value(1)).current;

  let spin = rotateTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });
  
  let loopCircleAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(rotateTwo, {
          toValue: 1,
          duration: 4000,
          easing: Easing.in,
          useNativeDriver: true
        }),

      Animated.sequence([
        Animated.parallel([
          Animated.timing(x, {
            toValue: .9,
            duration: 2000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(yTwo, {
            toValue: .9,
            duration: 2000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(yThree, {
            toValue: .9,
            duration: 2000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(xThree, {
            toValue: .9,
            duration: 2000,
            easing: Easing.in,
            useNativeDriver: true
          }),
        ]),

        Animated.parallel([
          Animated.timing(y, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(x, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(yTwo, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(xTwo, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(yThree, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(xThree, {
            toValue: .95,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
        ]),
        Animated.timing(rotateTwo, {
          toValue: 0,
          duration: 0,
          easing: Easing.in,
          useNativeDriver: true
        }),
      ]),
    ])
    ).start()
  }

  useEffect(() => {
    if (paused) {
      // create stopAnimation function
      rotateTwo.setValue(0);
      x.setValue(1);
      y.setValue(1);
      xTwo.setValue(1);
      yTwo.setValue(1);
      xThree.setValue(1);
      yThree.setValue(1);
    } else if (!paused) {
      loopCircleAnimation()
    }
  }, [paused])

  return (
    <Animated.View style={styles.main}>
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo, 
        transform: [
          { rotate: spin},
          {scaleX: x},
          {scaleY: y}
        ]
      }}/>
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo, 
        transform: [
          { rotate: spin},
          {scaleX: xTwo},
          {scaleY: yTwo}
        ]
      }} />
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo, 
        transform: [
          { rotate: spin},
          {scaleX: xThree},
          {scaleY: yThree}
        ]
      }} />
      
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    height: 300,
  },
  circle: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    justifyContent: 'center',
    alignItems: "center",
    position: 'absolute'
  },
  circleTwo: {
    borderColor: "rgba(255, 255, 255, .1)",
    shadowColor: "rgba(255,255,255, .75)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, 
      height: 0
    },
    shadowRadius: 5
  }
})