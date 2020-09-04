import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";
import theme from "../theme";

export const StyledButton = ({
  onPress = (() => {}),
  name,
  color = theme.BUTTONS_COLOR,
  borderColor = "transparent",
  alignSelf = "flex-end",
  borderWidth
}) => {
  const onPressHandler = () => {
    onPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={{...styles.buttonContainer, alignSelf}}>
      <TouchableOpacity onPress={onPressHandler} activeOpacity={0.8}>
        <View style={{ ...styles.button, backgroundColor: color, borderColor, borderWidth }}>
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '50%',
    height: 50,
  },
  button: {
    width: '100%',
    height: "100%",
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 20,
    fontFamily: "norms-medium",
    textAlign: "center",
  },
});
