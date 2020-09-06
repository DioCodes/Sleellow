import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'


export const CircleMoveAnimation = ({ paused }) => {
  let rotateTwo = useRef(new Animated.Value(0)).current;
  let x = useRef(new Animated.Value(.9)).current;
  let y = useRef(new Animated.Value(.9)).current;
  let xTwo = useRef(new Animated.Value(.9)).current;
  let yTwo = useRef(new Animated.Value(.9)).current;
  let xThree = useRef(new Animated.Value(.9)).current;
  let yThree = useRef(new Animated.Value(.9)).current;

  let spin = rotateTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });
  
  let loopCircleAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(rotateTwo, {
          toValue: 1,
          duration: 6000,
          easing: Easing.in,
          useNativeDriver: true
        }),
        Animated.sequence([
          Animated.parallel([
            Animated.timing(y, {
              toValue: .95,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true
            }),
            Animated.timing(x, {
              toValue: .9,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true
            }),
            Animated.timing(yTwo, {
              toValue: .9,
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
              toValue: .92,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true
            }),
            Animated.timing(xThree, {
              toValue: .9,
              duration: 3000,
              easing: Easing.in,
              useNativeDriver: true
            }),
          ]),

        Animated.parallel([
          Animated.timing(y, {
            toValue: .9,
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
            toValue: .9,
            duration: 3000,
            easing: Easing.in,
            useNativeDriver: true
          }),
          Animated.timing(xThree, {
            toValue: .9,
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

  let stopAnimation = () => {
    Animated.parallel([
      Animated.timing(rotateTwo, {
        toValue: 0,
        duration: 6000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(y, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(x, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(yTwo, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(xTwo, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(yThree, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
      Animated.timing(xThree, {
        toValue: .9,
        duration: 3000,
        easing: Easing.in,
        useNativeDriver: true
      }),
    ]).start()
  }
  
  

  useEffect(() => {
    if (paused) {
      // create stopAnimation function
      // rotateTwo.setValue(0);
      // x.setValue(.9);
      // y.setValue(.9);
      // xTwo.setValue(.9);
      // yTwo.setValue(.9);
      // xThree.setValue(.9);
      // yThree.setValue(.9);
      stopAnimation()
    } else if (!paused) {
      loopCircleAnimation()
    }
  }, [paused])

  return (
    <Animated.View style={{
      ...styles.main, 
      transform: [
        { rotate: spin }
      ]
    }}>
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo, 
        transform: [
          {scaleX: x},
          {scaleY: y}
        ]
      }}/>
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo, 
        transform: [
          {scaleX: xTwo},
          {scaleY: yTwo}
        ]
      }} />
      <Animated.View style={{
        ...styles.circle, 
        ...styles.circleTwo,
        // borderColor: 'red',
        transform: [
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
    borderWidth: .5,
    borderColor: "rgba(255, 255, 255, 1)",
    justifyContent: 'center',
    alignItems: "center",
    position: 'absolute',
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