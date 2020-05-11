import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { UserLevel } from "./UserLevel";
import { UserIcon } from "../../../assets/images/UserIcon";
import { ShowScreenRide } from "../../components/ShowScreenRide";

export const ProfileScreen = () => {
  return (
    <ShowScreenRide>
      <View style={styles.top}>
        {/* <UserLevel /> */}
        <View style={styles.userIcon}>
          <UserIcon />
        </View>
      </View>
    </ShowScreenRide>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 40,
  },
  top: {
    width: "100%",
    paddingHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  userIcon: {
    width: 100,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
