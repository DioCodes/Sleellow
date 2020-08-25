import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";
import { Ionicons } from '@expo/vector-icons';

export const PremiumButton = ({navigation}) => {
  return (
    <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => navigation.push("PremiumScreen")}>
      <View style={styles.premiumTextContainer}>
        <Text style={styles.premiumText}>
          Thanks for your support{" "}
          <Ionicons name="ios-heart" size={18} color="white" />
        </Text>
      </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  premiumTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
    // position: 'absolute',
    // bottom: 0
  },
  premiumText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: 'norms-medium',
    position: 'absolute',
    bottom: 0
  },
});
