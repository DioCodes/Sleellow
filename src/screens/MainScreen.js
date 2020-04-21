import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export const MainScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={{ color: "#fff" }}>Main Screen</Text>
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
