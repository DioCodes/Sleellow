import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../theme";

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
    borderColor: "transparent",
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 5,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    fontFamily: "norms-bold",
    textAlign: "center",
  },
});
