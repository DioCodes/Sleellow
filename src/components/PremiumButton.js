import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";
import { Ionicons } from '@expo/vector-icons';
import { t } from "../../assets/lang";

export const PremiumButton = ({navigation}) => {
  return (
    <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => navigation.replace("PremiumScreen")}>
      <View style={styles.premiumTextContainer}>
        <Text style={styles.premiumText}>
          {t("thanks_for_your_support")} {""}
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
