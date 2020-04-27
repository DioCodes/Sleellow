import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NotInSyncIcon } from "../../../assets/images/NotInSyncIcon";
import { InSyncIcon } from "../../../assets/images/InSyncIcon";
import { UserLevel } from "./UserLevel";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <View style={styles.top}>
        <UserLevel />

        <View style={styles.topButtons}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.premium}>
              <Text style={{ ...styles.premiumText }}>
                try premium for free
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.push("Auth")}
          >
            <NotInSyncIcon iconWidth={35} iconHeight={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "15%",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },

  premium: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  premiumText: {
    color: "#fff",
    fontFamily: "norms-medium",
    fontSize: 15,
  },
  topButtons: {
    height: 100,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});
