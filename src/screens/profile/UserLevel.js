import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage,
  Animated,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { USER_DATA } from "../../userData";
import { UserIcon } from "../../../assets/images/UserIcon";
import { t } from "../../../assets/lang/index";

export const UserLevel = () => {
  const isFocused = useIsFocused();
  let levelPoints = USER_DATA.levelPoints;
  let levelName = t("beginner");
  let maxPoints = 7;

  if (levelPoints >= 7 && levelPoints < 14) {
    maxPoints = 14;
    levelName = t("novice");
  } else if (levelPoints >= 14 && levelPoints < 30) {
    maxPoints = 30;
    levelName = t("intermediate");
  } else if (levelPoints >= 30 && levelPoints < 90) {
    maxPoints = 90;
    levelName = t("professional");
  } else if (levelPoints >= 90 && levelPoints < 180) {
    maxPoints = 180;
    levelName = t("expert");
  } else if (levelPoints >= 180 && levelPoints < 240) {
    maxPoints = 240;
    levelName = "master";
  } else if (levelPoints >= 240 && levelPoints < 300) {
    maxPoints = 300;
    levelName = "grand master";
  } else if (levelPoints >= 300 && levelPoints < 365) {
    maxPoints = 365;
    levelName = "enlightened";
  } else if (levelPoints >= 365) {
    maxPoints = 365;
    levelName = "god";
  }

  useEffect(() => {
    // Alert.alert(`Ура! 🎉 Теперь вы: \n "${levelName}"  `);
    // привяжи алерт к дате и времени!
  });

  const UserProgress = () => (
    <AnimatedCircularProgress
      size={145}
      width={15}
      fill={(100 / maxPoints) * levelPoints}
      tintColor="rgba(255, 255, 255, 1)"
      backgroundColor="rgba(255,255,255, .1)"
      arcSweepAngle={180}
      lineCap="round"
      rotation={45}
      duration={1000}
    >
      {() => <UserIcon />}
    </AnimatedCircularProgress>
  );

  return (
    <Animated.View style={styles.levelContainer}>
      <UserProgress />

      <View style={styles.levelNameWrapper}>
        <Text style={styles.levelText}>{levelName} </Text>
        <Text style={{ ...styles.levelText, ...styles.levelTextProg }}>
          {levelPoints}/{maxPoints}{" "}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  levelContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  levelNameWrapper: {
    paddingLeft: 20,
    paddingTop: 5,
    flex: 1,
    flexDirection: "column",
  },
  levelText: {
    color: "#fff",
    fontFamily: "norms-medium",
    fontSize: 18,
  },
  levelTextProg: {
    opacity: 0.4,
  },
});
