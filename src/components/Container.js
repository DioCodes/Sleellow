import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Container = ({ onPress, name, icon }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.header}>{name}</Text>
      {icon}
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
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    fontSize: 20,
    fontFamily: "norms-bold",
  },
});
