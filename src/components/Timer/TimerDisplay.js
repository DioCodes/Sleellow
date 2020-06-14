import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import * as Haptics from "expo-haptics";
import theme from "../../theme";

export const TimerDisplay = ({ timeLeft }) => {
  if (timeLeft === 0 || timeLeft === null) {
    return <View></View>;
  } else if (timeLeft === 0) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  } else {
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Time left: {timeLeft} </Text>
      </View>
    );
  }
  // return <View></View>;
};

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  timerText: {
    color: theme.TERTIARY_COLOR,
    fontSize: 30,
    fontFamily: "norms-medium",
  },
});
