import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert, Linking } from "react-native";
import { Notifications } from "expo";
import moment from "moment";
import theme from "../../theme";
import TimerButton from "./TimerButton";
import { connect, useDispatch } from "react-redux";
import { addMins } from "../../store/actions/minsActions";

const TimerDisp = ({ time, onPress, navigation }) => {
  const dispatch = useDispatch();

  const send = () => {
    const localNotification = {
      title: "Time to wake up!!!",
      body: "Take the risk or loose the chance!",
      ios: {
        sound: true,
      },
    };

    let sendAfterTwentyMinutes = Date.now();
    sendAfterTwentyMinutes += Number(time) * 60000;

    const schedulingOptions = {
      time: sendAfterTwentyMinutes,
      repeat: "minute",
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );

    dispatch(addMins(Number(time)));

    onPress();

    setTimeout(() => navigation.navigate("NapScreen"), 2000);
  };

  return (
    <View style={styles.timerContainer}>
      <TimerButton
        name="Start"
        color={theme.TERTIARY_COLOR}
        onPress={() => send()}
      />
      <TimerButton
        name="Stop"
        color={theme.QUATERNARY_COLOR}
        onPress={() => {
          Notifications.cancelAllScheduledNotificationsAsync();
        }}
      />
    </View>
  );
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

const mapStateToProps = (state) => {
  const { mins } = state;
  return { mins };
};

export default connect(mapStateToProps)(TimerDisp);
