import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Container = ({ children, header }) => {
  const ContainerHeader = () => {
    return <Text style={styles.header}>{header}</Text>;
  };
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.9}
      onPress={() => {}}
    >
      <ContainerHeader />
      <View>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },

  header: {
    fontSize: 20,
    fontFamily: "norms-bold",
  },
});
