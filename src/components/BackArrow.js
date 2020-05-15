import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export const BackArrow = ({ nav }) => (
  <View style={styles.backArrow}>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        nav.goBack();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    >
      <Ionicons
        name="ios-arrow-back"
        color="rgba(255, 255, 255, 0.2)"
        size={35}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    top: "3%",
    left: "5%",
  },
});
