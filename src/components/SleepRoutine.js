import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../theme";

export const SleepRoutine = ({ alarm, breath, onPress }) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.header}>Breathing practices</Text>
          {/* <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY}>
            <Text style={styles.headerNotification}>10:00 pm</Text>
          </TouchableOpacity> */}
        </View>
        {/* <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY}>
          <View style={styles.btnStart}>
            <Text style={styles.btnStartText}>start</Text>
          </View>
        </TouchableOpacity> */}
      </View>

      <View style={{ width: "100%" }}>
        <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY}>
          <View style={styles.routineContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <View style={styles.checker}></View> */}
              <Text style={{ ...styles.header, ...styles.headerInCont }}>
                Before sleep
              </Text>
            </View>
            <Ionicons
              name="ios-arrow-forward"
              color="rgba(255, 255, 255, .25)"
              size={25}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY}>
          <View style={styles.routineContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <View style={styles.checker}></View> */}
              <Text style={{ ...styles.header, ...styles.headerInCont }}>
                After waking up
              </Text>
            </View>
            <Ionicons
              name="ios-arrow-forward"
              color="rgba(255, 255, 255, .25)"
              size={25}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontFamily: "norms-bold",
    color: "#fff",
  },
  headerInCont: {
    fontSize: 18,
  },
  headerNotification: {
    color: "#fff",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "norms-regular",
  },
  btnStart: {
    width: 100,
    height: windowHeight > 800 ? 45 : 40,
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStartText: {
    fontFamily: "norms-medium",
    fontSize: 20,
  },
  routineContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checker: {
    width: 30,
    height: 30,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});
