import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { t } from "../../../assets/lang";

export const ShowSleepTime = ({ chosenTime, timeMode, showAnim = false }) => {
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();
  const [time4, setTime4] = useState();
  const [time5, setTime5] = useState();
  const [time6, setTime6] = useState();

  let animatedOpacity = useRef(new Animated.Value(1)).current;

  const dateToTime = (timeFirst) => {
    let h = (timeFirst.getHours() < 10 ? "0" : "") + timeFirst.getHours();
    let m = (timeFirst.getMinutes() < 10 ? "0" : "") + timeFirst.getMinutes();
    return h + ":" + m;
  };

  const hideAndShowAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedOpacity, {
        duration: 250,
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        duration: 250,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const getFallAsleepTime = () => {
    let d = chosenTime;

    // time to fall asleep
    let time1 = new Date(d.getTime() - 540 * 60000); // chosenDate - 9:00 h
    let time2 = new Date(time1.getTime() + 90 * 60000); // chosenDate - 7:30 h
    let time3 = new Date(time2.getTime() + 90 * 60000); // chosenDate - 6:00 h
    let time4 = new Date(time3.getTime() + 90 * 60000); // chosenDate - 4:30 h
    let time5 = new Date(time4.getTime() + 90 * 60000); // chosenDate - 4:30 h
    let time6 = new Date(time5.getTime() + 90 * 60000); // chosenDate - 4:30 h

    setTime1(dateToTime(time1));
    setTime2(dateToTime(time2));
    setTime3(dateToTime(time3));
    setTime4(dateToTime(time4));
    setTime5(dateToTime(time5));
    setTime6(dateToTime(time6));
  };

  const getWakeUpTime = () => {
    let d = chosenTime;

    // time to fall asleep
    let time1 = new Date(d.getTime() + 540 * 60000); // chosenDate - 9:00 h
    let time2 = new Date(time1.getTime() - 90 * 60000); // chosenDate - 7:30 h
    let time3 = new Date(time2.getTime() - 90 * 60000); // chosenDate - 6:00 h
    let time4 = new Date(time3.getTime() - 90 * 60000); // chosenDate - 4:30 h
    let time5 = new Date(time4.getTime() - 90 * 60000); // chosenDate - 4:30 h
    let time6 = new Date(time5.getTime() - 90 * 60000); // chosenDate - 4:30 h

    setTime1(dateToTime(time1));
    setTime2(dateToTime(time2));
    setTime3(dateToTime(time3));
    setTime4(dateToTime(time4));
    setTime5(dateToTime(time5));
    setTime6(dateToTime(time6));
  };

  useEffect(() => {
    // console.log(timeMode); //undefined
    if (timeMode === undefined) {
    }
    timeMode == "sun" ? getFallAsleepTime() : getWakeUpTime();

    if (timeMode == "sun") {
      setTimeout(() => getFallAsleepTime(), 250);
      showAnim ? hideAndShowAnimation() : null;
    } else {
      setTimeout(() => getWakeUpTime(), 250);
      showAnim ? hideAndShowAnimation() : null;
    }
  }, [chosenTime, timeMode]);

  return (
    <View style={styles.main}>
      {/* 5-6 cycles */}
      <View style={styles.container}>
        <Text style={{ ...styles.text, ...styles.cyclesHeader }}>
          5-6 {t("cycles")}
        </Text>

        <Animated.View
          style={{ ...styles.cyclesTimeContainer, opacity: animatedOpacity }}
        >
          <Text style={{ ...styles.text, ...styles.cyclesTime }}>{time2}</Text>
          <Text style={{ ...styles.text, ...styles.cyclesTimeOr }}>
            {" "}
            {t("or")}{" "}
          </Text>
          <Text style={{ ...styles.text, ...styles.cyclesTime }}>{time1}</Text>
        </Animated.View>
      </View>

      {/* 3-4 cycles */}
      <View style={styles.container}>
        <Text
          style={{ ...styles.text, ...styles.textTwo, ...styles.cyclesHeader }}
        >
          3-4 {t("cycles-2")}
        </Text>

        <Animated.View
          style={{ ...styles.cyclesTimeContainer, opacity: animatedOpacity }}
        >
          <Text
            style={{
              ...styles.text,
              ...styles.textTwo,
              ...styles.cyclesTime,
            }}
          >
            {time4}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...styles.textTwo,
              ...styles.cyclesTimeOr,
            }}
          >
            {" "}
            {t("or")}{" "}
          </Text>
          <Text
            style={{ ...styles.text, ...styles.textTwo, ...styles.cyclesTime }}
          >
            {time3}
          </Text>
        </Animated.View>
      </View>

      {/* 1-2 cycles */}
      <View style={styles.container}>
        <Text
          style={{
            ...styles.text,
            ...styles.textThree,
            ...styles.cyclesHeader,
          }}
        >
          1-2 {t("cycles-2")}
        </Text>

        <Animated.View
          style={{ ...styles.cyclesTimeContainer, opacity: animatedOpacity }}
        >
          <Text
            style={{
              ...styles.text,
              ...styles.textThree,
              ...styles.cyclesTime,
            }}
          >
            {time6}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...styles.textThree,
              ...styles.cyclesTimeOr,
            }}
          >
            {" "}
            {t("or")}{" "}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...styles.textThree,
              ...styles.cyclesTime,
            }}
          >
            {time5}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    // width: "100%",
    // flex: 1
  },
  text: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 22,
  },
  textTwo: {
    opacity: 0.5,
  },
  textThree: {
    opacity: 0.25,
  },
  cyclesHeader: {},
  cyclesTimeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  cyclesTime: {},
  cyclesTimeOr: {
    fontSize: 20,
    fontFamily: "norms-medium",
    opacity: 0.1,
  },
});
