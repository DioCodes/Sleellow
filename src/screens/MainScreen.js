import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export const MainScreen = (props) => {
  const focusState = useIsFocused();

  // if (focusState) {
  //   props.screenProps.focused = true;
  // }

  return (
    <View style={styles.center}>
      <Text style={{ color: "#fff" }}>
        {focusState ? "Focused" : "Not Focused"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
