import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";
import theme from "../theme";

export const StyledButton = ({
  onPress,
  name,
  color = theme.PRIMARY_COLOR,
  borderColor = "transparent",
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={{ ...styles.button, backgroundColor: color, borderColor }}>
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
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 45,
    // marginVertical: 10,
  },
  buttonText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    fontFamily: "norms-bold",
    textAlign: "center",
  },
});
