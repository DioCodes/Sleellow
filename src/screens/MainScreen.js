import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ShowScreenRide } from "../components/ShowScreenRide";
import { Container } from "../components/Container";

export const MainScreen = ({ navigation }) => {
  return (
    <ShowScreenRide>
      <View style={styles.main}>
        <Container onPress={() => navigation.navigate("FindTime")} />
      </View>
    </ShowScreenRide>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: windowHeight > 800 ? "15%" : "10%",
  },
});
