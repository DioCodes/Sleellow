import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";

import { ShowSleepTime } from "./ShowSleepTime";
import { t } from "../../../assets/lang";
import theme from "../../theme";
import { UpdateButton } from "../UpdateButton";

export const FallAsleepNowCard = () => {
  let func = () => {
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 14);

    return currentDate;
  };
  const [currentTime, updateCurrentTime] = useState(func());

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>{t("sleep_time-fall_asleep_now")}</Text>
          <UpdateButton onPressHandler={() => updateCurrentTime(func())} />
        </View>

        <Text style={styles.description}>
          {t("sleep_time-fall_asleep_now-desc")}
        </Text>
      </View>
      <ShowSleepTime chosenTime={currentTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, .05)",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  mainContainer: {
    marginBottom: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  header: {
    color: "#fff",
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: theme.CONTAINER_FONT_FAMILY,
  },
  description: {
    color: "rgba(255, 255, 255, .5)",
    fontFamily: "norms-regular",
    fontSize: 14,
  },
});
