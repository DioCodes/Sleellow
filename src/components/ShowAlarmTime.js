import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export const ShowAlarmTime = ({ time, paused }) => {
  const [currentTime, setCurrentTime] = useState(
    moment().add(time, "minutes").format("hh:mm a")
  );
  let curTime = useRef(null);
  const animOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setCurrentTime(moment().add(time, "minutes").format("hh:mm a"));
    curTime.current = setInterval(() => {
      setCurrentTime(moment().add(time, "minutes").format("hh:mm a"));
    }, 1000);

    if (paused) {
      Animated.timing(animOpacity, {
        duration: 1500,
        toValue: 0.25,
        useNativeDriver: true,
      }).start();
      clearInterval(curTime.current);
    } else {
      Animated.timing(animOpacity, {
        duration: 2500,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }

    return () => {
      clearInterval(curTime.current);
    };
  }, [paused, time, currentTime]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: animOpacity,
      }}
    >
      <Ionicons
        style={{
          lineHeight: 14,
          height: 14,
          width: 14,
          textAlign: "center",
          marginRight: 2.5,
        }}
        name="ios-alarm"
        size={14}
        color="rgba(255, 255, 255, 1)"
        // color="rgba(255, 255, 255, .15)"
        //color="rgba(255, 255, 255, .15)" animated color
      />
      <Text style={styles.time}>{currentTime}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 75,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingTop: 10,
  },
  time: {
    color: "rgba(255, 255, 255, 1)",
    // color: "rgba(255, 255, 255, .15)",
    // color="rgba(255, 255, 255, .15)" animated color
    fontFamily: "norms-regular",
    fontSize: 14,
  },
});
