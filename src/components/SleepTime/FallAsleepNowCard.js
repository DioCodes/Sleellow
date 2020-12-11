import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import Collapsible from 'react-native-collapsible';

import { ShowSleepTime } from "./ShowSleepTime";
import { t } from "../../../assets/lang";
import theme from "../../theme";
import { UpdateButton } from "../UpdateButton";
import { ShowContainerButton } from "../ShowContainerButton";

export const FallAsleepNowCard = () => {
  let func = () => {
    let currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 14);
    return currentDate;
  };
  const [currentTime, updateCurrentTime] = useState(func());
  const [isCollapsed, collapseContainer] = useState(true)
  
  const getData = (val) => {
    collapseContainer(val)
    updateCurrentTime(func())
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>{t("sleep_time-fall_asleep_now")}</Text>
          <ShowContainerButton onPressHandler={getData} />
        </View>
      </View>


    <Collapsible collapsed={isCollapsed}  >
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {t("sleep_time-fall_asleep_now-desc")}
        </Text>
      </View>
      <ShowSleepTime chosenTime={currentTime} />
    </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 75,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, .05)",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  descriptionContainer: {
    marginVertical: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    // width: 0
  },
});
