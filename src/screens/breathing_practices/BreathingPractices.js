import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "../../theme";
import { Container } from "../../components/Container";
import { t } from "../../../assets/lang";

export const BreathingPractices = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: t("breathing_practices"),
    });
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.header}>{t("relaxation")} {<Ionicons name="ios-leaf" size={22} color="white" />}</Text>
        <Container
          name={t("sleep")}
          onPress={() => {
            props.navigation.navigate("SleepScreen");
          }}
        />
        <Text style={styles.header}>{t("energy")} {<Ionicons name="ios-sunny" size={22} color="white" />}</Text>
        <Container
          name={t("awakening")}
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
