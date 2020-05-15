import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 40,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    // paddingTop: 20,
    paddingTop: windowHeight > 800 ? "15%" : "10%",
  },
  userIcon: {
    width: 100,
  },
});
