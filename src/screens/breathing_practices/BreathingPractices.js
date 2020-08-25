import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../../theme";
import { Container } from "../../components/Container";

export const BreathingPractices = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: "Breathing practices",
    });
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.header}>Relaxation {<Ionicons name="ios-leaf" size={22} color="white" />}</Text>
        <Container
          name="Sleep"
          onPress={() => {
            props.navigation.navigate("SleepScreen");
          }}
        />
        <Text style={styles.header}>Energy {<Ionicons name="ios-flame" size={22} color="white" />}</Text>
        <Container
          name="Wake up"
          onPress={() => {
            props.navigation.navigate("WakeUpScreen");
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  header: {
    fontSize: theme.HEADER,
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
    marginBottom: 10,
  },
});
