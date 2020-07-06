import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { translate } from "i18n-js";
import theme from "../theme";

import { LeapsIconClosed } from "../../assets/images/LeapsIconClosed";
import { LeapsIconBreath } from "../../assets/images/LeapsIconBreath";
import { NoseIconInhale } from "../../assets/images/NoseIconInhale";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";
import { DizzinessIcon } from "../../assets/images/DizzinessIcon";

const BreathScreen_Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Info",
      headerBackTitle: "Sleep",
    });
  }, []);

  const Img = ({ children }) => {
    return <View style={styles.image}>{children}</View>;
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.tipsContent}>
        <Img>{item.image}</Img>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const wh = Dimensions.get("window").height;

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Description</Text>

            <Text style={styles.text}>
              This exercise was developed by Dr. Andrew Weil. It calms the
              nervous system. Unlike tranquilizing drugs, which are initially
              effective, but then lose their strength over time, this exercise
              is not very effective at first when you first use it, but it gains
              strength through repetition and practice.
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Exercise</Text>

            <View style={styles.icons}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>Inhale</Text>
                <Text style={styles.iconTextTime}>4 sec</Text>
                <NoseIconInhale />
              </View>

              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>Hold</Text>
                <Text style={styles.iconTextTime}>7 sec</Text>
                <LeapsIconClosed />
              </View>

              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>Exhale</Text>
                <Text style={styles.iconTextTime}>8 sec</Text>
                <LeapsIconBreath />
              </View>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Tips</Text>
            <AppIntroSlider
              data={slides}
              renderItem={renderSliderItem}
              onDone={() => {}}
              showSkipButton={false}
              showDoneButton={false}
              showNextButton={false}
              dotStyle={styles.dot}
              activeDotStyle={{ ...styles.dot, ...styles.activeDot }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const slides = [
  {
    key: "s1",
    image: <SleepBackIcon />,
    text:
      "Lie on your back. Close your eyes and relax. Breathe in your stomach. Focus on breathing and repeat the mantra in your mind.",
  },
  {
    key: "s2",
    image: <DizzinessIcon />,
    text:
      "If you feel dizzy, stop the exercise. Your health is above all. Try to take 4 breaths and increase this amount over time.",
  },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: theme.PRIMARY_COLOR,
    // paddingHorizontal: 20,
  },
  container: {
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: 15,
  },
  text: {
    color: "#fff",
    textAlign: "justify",
    paddingHorizontal: 20,
    fontFamily: "norms-regular",
    fontSize: 16,
  },
  textHeader: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 22,
    marginBottom: 5,
    alignSelf: "center",
  },
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-medium",
    fontSize: 16,
  },
  iconTextTime: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
  },
  tipsContent: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    height: 230,
    width: "100%",
  },
  dot: {
    bottom: Dimensions.get("window").height > 800 ? -30 : -25,
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});

export default BreathScreen_Info;
