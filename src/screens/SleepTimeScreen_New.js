import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { t } from "../../assets/lang";
import { Slider } from "../components/Slider";
import { SleepTimeCard } from "../components/SleepTime/SleepTimeCard";

import theme from "../theme";
import { FallAsleepNowCard } from "../components/SleepTime/FallAsleepNowCard";

export const SleepTimeScreen_New = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: t("sleep_time"),
    });
  }, []);

  return (
    <View style={styles.main}>
      <Slider tips={tips} />
      <ScrollView>
        <SleepTimeCard />
        <FallAsleepNowCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 20,
  },
});

const tips = [
  t("sleep_time-tip_1"),
  t("sleep_time-tip_2"),
  t("sleep_time-tip_3"),
  t("sleep_time-tip_4"),
];
