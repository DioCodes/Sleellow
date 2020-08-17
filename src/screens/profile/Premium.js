import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Premium = () => {
  return (
    <View style={styles.premiumContainer}>
      <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY}>
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
    // width: "50%",
    height: 50,
    // margin: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  premiumTextContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  premiumText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 16,
    fontFamily: 'norms-bold'
  },
});
