import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export const ProfileScreen = ({ navigation }) => {
  // const focused = useIsFocused();

  return (
    <View style={styles.center}>
      <Text style={{ color: "#fff" }}>Profile Screen</Text>
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
