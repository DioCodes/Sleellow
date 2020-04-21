import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <View style={styles.top}>
        <View>
          <Text style={{ ...styles.text, ...styles.header }}>profile</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.push("Auth")}
          >
            <Text
              style={{
                ...styles.text,
                position: "absolute",
                bottom: -30,
                color: "rgba(255, 255, 255, .5)",
                fontSize: 20,
              }}
            >
              sign in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <View style={styles.premium}>
            <Text style={{ ...styles.text }}>try premium for free</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontFamily: "norms-medium",
    fontSize: 15,
  },
  header: {
    fontFamily: "norms-bold",
    fontSize: 35,
  },
  premium: {
    // backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
});
