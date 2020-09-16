import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

export const HoldButton = ({ duration, row = false, onHoldEnd, paused }) => {
  const [progress, setProgress] = useState(0);
  let anim = useRef(new Animated.Value(0.1)).current;
  const btnOpacity = useRef(new Animated.Value(0)).current;
  const barOpacity = useRef(new Animated.Value(0)).current;
  const ACTION_TIMER = 400;
  let prog = useRef(null);

  const widthInterpolated = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
    extrapolate: "clamp",
  });

  const defaultProps = {
    height: 2.5,
    borderColor: "white",
    borderWidth: 0,
    borderRadius: 50,
    barColor: "white",
    fillColor: "rgba(255, 255, 255, 0.5)",
    duration: duration,
    row,
  };

  const showBtn = () => {
    Animated.timing(btnOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const hideBtn = () => {
    Animated.timing(btnOpacity, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };

  const handlePressIn = () => {
    Animated.timing(barOpacity, {
      toValue: 1,
      duration: defaultProps.duration,
      useNativeDriver: true,
    }).start();
  };

  const handleLongPress = () => {
    prog.current = setInterval(() => {
      setProgress((p) => p + 0.1);
    }, 375);

    Animated.timing(anim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    clearInterval(prog.current);
    setProgress(0);

    Animated.parallel([
      Animated.timing(anim, {
        toValue: 0.1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(barOpacity, {
        toValue: 0,
        duration: defaultProps.duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (!paused) {
      showBtn();
    } else {
      hideBtn();
    }

    if (progress === 1.2) {
      onHoldEnd();
      handlePressOut();
    }
  }, [paused, progress]);

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          {
            flexDirection: "row",
            height: defaultProps.height,
            opacity: barOpacity,
          },
          row ? { flex: 1 } : undefined,
        ]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              ...StyleSheet.absoluteFill,
              borderColor: defaultProps.borderColor,
              borderWidth: defaultProps.borderWidth,
              borderRadius: defaultProps.borderRadius,
              backgroundColor: defaultProps.fillColor,
            }}
          />
          <Animated.View
            style={{
              position: "absolute",
              // left: 0,
              top: 0,
              bottom: 0,
              width: 10,
              transform: [
                {
                  scaleX: widthInterpolated,
                },
              ],
              backgroundColor: defaultProps.barColor,
              borderRadius: defaultProps.borderRadius,
              borderWidth: 0,
              borderColor: defaultProps.borderColor,
            }}
          />
        </View>
      </Animated.View>

      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        delayLongPress={0}
      >
        <Animated.View style={{ ...styles.btn, opacity: btnOpacity }}>
          <View style={{ ...styles.btn, ...styles.btnSec }} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // justifyContent: 'center',
    alignItems: "center",
    height: 100,
    width: 100,
    marginTop: 30,
    // position: "absolute",
    // bottom: 0,

    // backgroundColor: 'pink',
    // flexDirection: 'row'
  },
  btn: {
    // opacity: 0.5,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSec: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    // marginTop: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
    borderRadius: 5,
  },
});
