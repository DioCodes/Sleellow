import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Container = ({ onPress, name, icon, time }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {time >= 0 ? (
        <View style={styles.mainWrapper}>
          <View style={styles.wrapper}>
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.time}>{time} mins today</Text>
          </View>
          {icon}
        </View>
      ) : (
        <View style={styles.btnCont}>
          <Text style={styles.header}>{name}</Text>
          {icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontFamily: "norms-bold",
    color: "#fff",
  },
  mainWrapper: {
    width: "100%",
    // backgroundColor: "red",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  time: {
    fontFamily: "norms-regular",
    color: "rgba(255, 255, 255, .5)",
  },
});
