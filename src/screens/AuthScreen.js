import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SecurityImage } from "../../assets/images/SecurityImage";
// import SvgUri from "expo-svg-uri";

export const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <View style={styles.backArrow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="ios-arrow-back"
            color="rgba(255, 255, 255, 0.2)"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.regContent}>
        {/* <Image
          width={250}
          height={300}
          source={require("../../assets/images/security-icon.png")}
        /> */}
        <SecurityImage />
        <View style={styles.contentTextWrapper}>
          <Text style={styles.contentText}>
            To synchronize & protect your data, please{" "}
            <Text style={{ fontFamily: "norms-bold" }}>Register</Text> or{" "}
            <Text style={{ fontFamily: "norms-bold" }}>Sign In</Text> to an
            existing account.
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={{ ...styles.wrapper, ...styles.logInBtn }}>
            <Text style={styles.logInBtnText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={{ ...styles.wrapper, ...styles.regBtn }}>
            <Text style={styles.regBtnText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  regContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 300,
  },
  contentText: {
    fontFamily: "norms-regular",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  logInBtn: {
    height: 50,
    width: 250,
    backgroundColor: "white",
    borderRadius: 30,
  },
  logInBtnText: {
    fontFamily: "norms-bold",
    fontSize: 25,
  },
  regBtn: {
    height: 30,
    width: "100%",
  },
  regBtnText: {
    fontFamily: "norms-bold",
    color: "rgba(255, 255, 255, .4)",
    fontSize: 18,
  },
  backArrow: {
    position: "absolute",
    top: "7%",
    left: "5%",
  },
});
