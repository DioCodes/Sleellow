import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native'
import Constants from "expo-constants"
import { Star } from './Star'


export const StarsAnimation = ({ paused }) => {
  const [stars, setStars] = useState([]);
  const [height, setHeight] = useState(100);

  const onLayout = (e) => {
    setHeight(e.nativeEvent.layout.height);
  };

  const getStars = () => {
    const currentStars = [];

    for (let y = 0; y < 25; y += 1) {
      currentStars.push({
        id: y,
      });
    }

    return setStars(currentStars);
  };

  useEffect(() => {
    getStars();
  }, [])

  return (
    <Animated.View style={styles.main} onLayout={onLayout}>
      {stars.map((star) => (
        <Star
          height={height}
          paused={paused}
          key={star.id}
        />
      ))}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    // flex: 1,
    zIndex: -1,
    // backgroundColor: 'red',
  },
})