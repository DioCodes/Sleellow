import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Haptics from "expo-haptics";

import theme from "../theme";
import { t } from "../../assets/lang";

export const ModalTimePicker = ({
  isVisible,
  date,
  onConfirm,
  onCancel,
  customPicker,
}) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode="time"
      date={date}
      isDarkModeEnabled
      headerTextIOS={`${t("choose_C")} ${t("time")}`}
      cancelTextIOS={t("cancel_C")}
      confirmTextIOS={t("confirm_C")}
      minuteInterval={5}
      customConfirmButtonIOS={(btn) => {
        return (
          <TouchableOpacity
            activeOpacity={theme.ACTIVE_OPACITY}
            onPress={() => {
              btn.onPress();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <View style={styles.btnTimePickerContainer}>
              <Text style={styles.btnTimePickerText}>{btn.label}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      customHeaderIOS={(btn) => {
        return (
          <View style={styles.headerPickerContainer}>
            <Text style={styles.headerPickerText}>{btn.label}</Text>
          </View>
        );
      }}
      pickerContainerStyleIOS={{
        backgroundColor: "#191B1E",
      }}
      customCancelButtonIOS={() => <View></View>}
      customPickerIOS={customPicker}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

const styles = StyleSheet.create({
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
    marginTop: 15,
  },
  headerPickerText: {
    fontFamily: "norms-medium",
    fontSize: 18,
    color: theme.SECONDARY_COLOR,
  },
});
