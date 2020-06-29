import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { translate } from "i18n-js";
import theme from "../theme";

import { LeapsIconClosed } from "../../assets/images/LeapsIconClosed";
import { LeapsIconBreath } from "../../assets/images/LeapsIconBreath";
import { NoseIconInhale } from "../../assets/images/NoseIconInhale";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";

const BreathScreenInfo = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Guide",
      headerBackTitle: "Breath",
    });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            {/* <Text style={styles.textHeader}>Tips</Text> */}
            <View style={styles.image}>
              <SleepBackIcon />
            </View>
            <Text style={styles.text}>
              Lie on your back. Close your eyes and relax. Focus on breathing
              and repeat the mantra in your mind.
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
            <Text style={styles.textHeader}>Description</Text>

            <Text style={styles.text}>
              This exercise was developed by Dr. Andrew Weil. It calms the
              nervous system. Unlike tranquilizing drugs, which are initially
              effective, but then lose their strength over time, this exercise
              is not very effective at first when you first use it, but it gains
              strength through repetition and practice.
            </Text>
          </View>

          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  textContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "justify",
    fontFamily: "norms-regular",
    fontSize: 16,
  },
  textHeader: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 22,
    marginBottom: 5,
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
    // backgroundColor: "blue",
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
});

export default BreathScreenInfo;
