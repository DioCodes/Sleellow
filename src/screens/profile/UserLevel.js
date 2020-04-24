import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { USER_DATA } from "../../userData";

export const UserLevel = () => {
  let levelPoints = USER_DATA.levelPoints;
  let levelName = "beginner";
  let maxPoints = 7;
  const isFocused = useIsFocused();

  if (levelPoints >= 7 && levelPoints < 14) {
    maxPoints = 14;
    levelName = "novice";
  } else if (levelPoints >= 14 && levelPoints < 30) {
    maxPoints = 30;
    levelName = "intermediate";
  } else if (levelPoints >= 30 && levelPoints < 90) {
    maxPoints = 90;
    levelName = "professional";
  } else if (levelPoints >= 90 && levelPoints < 180) {
    maxPoints = 180;
    levelName = "expert";
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

  const UserProgress = () => (
    <AnimatedCircularProgress
      size={130}
      width={15}
      fill={(100 / maxPoints) * levelPoints}
      tintColor="#fff"
      backgroundColor="rgba(255,255,255, .1)"
      arcSweepAngle={183}
      lineCap="round"
      rotation={45}
      duration={1000}
    >
      {() => <Text style={{ ...styles.text, ...styles.header }}>you</Text>}
    </AnimatedCircularProgress>
  );

  const UserUnFocusProgress = () => (
    <AnimatedCircularProgress
      size={130}
      width={15}
      fill={0}
      tintColor="#fff"
      backgroundColor="rgba(255,255,255, .15)"
      arcSweepAngle={183}
      lineCap="round"
      rotation={45}
      duration={800}
    >
      {() => <Text style={{ ...styles.text, ...styles.header }}>you</Text>}
    </AnimatedCircularProgress>
  );

  return (
    <View style={styles.levelContainer}>
      {isFocused ? <UserProgress /> : <UserUnFocusProgress />}

      <View style={styles.levelNameWrapper}>
        <Text style={styles.levelText}>{levelName} </Text>
        <Text style={{ ...styles.levelText, ...styles.levelTextProg }}>
          {levelPoints}/{maxPoints}{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 40,
  },
  levelContainer: {
    height: 165,
    justifyContent: "space-between",
    alignItems: "center",
  },
  levelNameWrapper: {
    position: "absolute",
    bottom: -20,
    flexDirection: "column",
    width: 110,
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
