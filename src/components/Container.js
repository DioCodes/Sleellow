import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Container = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.header}>Find time to fall asleep</Text>
      <Ionicons name="ios-arrow-forward" color="rgba(0, 0, 0, .2)" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    fontSize: 20,
    fontFamily: "norms-bold",
  },
});
