import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ShowScreenRide } from "../components/ShowScreenRide";
import { Container } from "../components/Container";

export const MainScreen = () => {
  return (
    <ShowScreenRide>
      <View style={styles.main}>
        <Container header="Find Sleep Time" />
      </View>
    </ShowScreenRide>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
