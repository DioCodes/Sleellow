import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const StyledButton = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#000",
    borderRadius: 5,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "norms-bold",
    textAlign: "center",
  },
});
