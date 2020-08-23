import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";

export const PremiumButton = ({navigation}) => {
  return (
    <View style={styles.premiumContainer}>
      <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => navigation.push("PremiumScreen")}>
        <View style={styles.premiumTextContainer}>
          <Text style={styles.premiumText}>
            Try premium for free
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  premiumContainer: {
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  premiumTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  premiumText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 16,
    fontFamily: 'norms-bold'
  },
});
