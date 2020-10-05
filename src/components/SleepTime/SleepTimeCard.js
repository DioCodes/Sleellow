import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import theme from "../../theme";
import { t } from "../../../assets/lang";

import { ModalTimePicker } from "../ModalTimePicker";
import { ShowSleepTime } from "./ShowSleepTime";

export const SleepTimeCard = () => {
  const datePicker = new Date();
  datePicker.setHours(5, 0);
  // datePicker.setMinutes(5);

  const [isSelected, setIsSelected] = useState(true);
  const [mode, setMode] = useState("sun");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState("5:00");
  const [pickerDate, setPickerDate] = useState(datePicker);
  const [chosenHours, setChosenHours] = useState();
  const [chosenMinutes, setChosenMinutes] = useState();

  const modes = [
    {
      customIcon: (
        <Ionicons
          name="ios-sunny"
          size={20}
          style={{
            height: 20,
            textAlign: "center",
          }}
          color={
            isSelected && mode == "sun"
              ? "black"
              : !isSelected && mode == "sun"
              ? "black"
              : "rgba(0, 0, 0, .25)"
          }
        />
      ),
      value: "sun",
    },
    {
      customIcon: (
        <Ionicons
          name="ios-moon"
          size={20}
          style={{
            height: 20,
            textAlign: "center",
          }}
          color={
            !isSelected && mode == "moon"
              ? "black"
              : isSelected && mode == "moon"
              ? "black"
              : "rgba(0, 0, 0, .25)"
          }
        />
      ),
      value: "moon",
    },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    let h = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let m = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    // setChosenHours(h);
    // setChosenMinutes(m);
    setPickerDate(date);
    setTime(`${h}:${m}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          activeOpacity={theme.ACTIVE_OPACITY}
          onPress={() => {
            showDatePicker();
          }}
        >
          <View style={styles.headerTimeWrapper}>
            <Text style={styles.headerTime}>{time}</Text>
          </View>
        </TouchableOpacity>

        <SwitchSelector
          options={modes}
          initial={0}
          onPress={(value) => {
            setIsSelected(isSelected ? false : true);
            setMode(value);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
          borderRadius={13}
          buttonColor="#fff"
          backgroundColor={theme.TERTIARY_COLOR}
          height={30}
          style={{
            width: 130,
          }}
          animationDuration={250}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {t("sleep_time-desc")}{" "}
          {mode == "sun" ? t("sleep_time-desc_sun") : t("sleep_time-desc_moon")}{" "}
          {time}
        </Text>
      </View>

      <ShowSleepTime chosenTime={pickerDate} timeMode={mode} />

      <ModalTimePicker
        isVisible={isDatePickerVisible}
        date={pickerDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 150,
    // maxHeight: 200,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, .05)",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTimeWrapper: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, .25)",
  },
  headerTime: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
    fontSize: 24,
  },

  btnTimePickerContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTimePickerText: {
    fontFamily: "norms-medium",
    fontSize: 18,
  },

  headerPickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  headerPickerText: {
    fontFamily: "norms-medium",
    fontSize: 18,
    color: theme.SECONDARY_COLOR,
  },

  descriptionContainer: {
    marginVertical: 10,
  },
  descriptionText: {
    color: "rgba(255, 255, 255, .5)",
    fontFamily: "norms-regular",
    fontSize: 14,
  },
});
