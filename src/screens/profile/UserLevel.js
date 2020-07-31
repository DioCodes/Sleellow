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

import { UserIcon } from "../../../assets/images/UserIcon";
import { t } from "../../../assets/lang/index";
import { useSelector } from "react-redux";

export const UserLevel = () => {
  const isFocused = useIsFocused();

  // let levelName = t("beginner");
  let level = useSelector((state) => state.level.level)
  let levelPoints = useSelector((state) => state.level.levelExperience);
  let levelName = useSelector((state) => state.level.levelTitle);
  let maxPoints = useSelector((state) => state.level.maxLevelExperience);

  // useEffect(() => {
    // Alert.alert(`Ура! 🎉 Теперь вы: \n "${levelName}"  `);
    // привяжи алерт к дате и времени!
    
  // });

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
        <Text style={styles.levelText}>
          {/* {levelName} */}
          Level {level}
        </Text>

        <Text style={{ ...styles.levelText, ...styles.levelTextProg }}>
          {levelPoints}/{maxPoints}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  levelContainer: {
    height: 200,
    justifyContent: "flex-start",
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
    fontSize: 16
  },
});
