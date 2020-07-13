import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import theme from "../theme";

export const Container = ({ onPress, name, icon }) => {
  const onPressHandler = () => {
    onPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={theme.ACTIVE_OPACITY}
      onPress={onPressHandler}
    >
      <View style={styles.btnCont}>
        <Text style={styles.header}>{name}</Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 21,
    fontFamily: "norms-bold",
    color: "#fff",
  },
  mainWrapper: {
    width: "100%",
    // backgroundColor: "red",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  time: {
    fontFamily: "norms-regular",
    color: "rgba(255, 255, 255, .5)",
  },
});
