import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Easing, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Star } from "./Star";

export const StarsAnimation = ({ paused, pause }) => {
  const [stars, setStars] = useState([]);
  const [starsSec, setStarsSec] = useState([]);
  const [height, setHeight] = useState(100);

  let mainOpacity = useRef(new Animated.Value(1)).current;

  const onLayout = (e) => {
    setHeight(e.nativeEvent.layout.height);
  };

  const getStars = () => {
    const starsOne = [];
    const starsTwo = [];

    for (let y = 0; y < 10; y += 1) {
      starsOne.push({
        id: y,
      });
    }

    for (let y = 0; y < 20; y += 1) {
      starsTwo.push({
        id: y,
      });
    }

    return setStars(starsOne), setStarsSec(starsTwo);
  };

  useEffect(() => {
    if (paused === false) {
      getStars();
    } else if (paused === true && pause == true) {
      // setStars([])
      // setStarsSec([])
      Animated.timing(mainOpacity, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true,
      }).start((e) => {
        if (e.finished) {
          setStars([]);
          setStarsSec([]);
          mainOpacity.setValue(1);
        }
      });
    }

    console.log(paused);
  }, [paused]);

  return (
    <Animated.View
      style={{ ...styles.main, opacity: mainOpacity }}
      onLayout={onLayout}
    >
      {stars.map((star) => (
        <Star height={height} paused={paused} key={star.id} />
      ))}
      {starsSec.map((star) => (
        <Star height={height / 1.75} paused={paused} key={star.id} />
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    top: 30,
    height: "100%",
    width: "100%",
    // flex: 1,
    zIndex: -1,
    // backgroundColor: 'red',
  },
});
