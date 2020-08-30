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
import { translate, t } from "i18n-js";

import theme from "../../../theme";
import { LeapsIconClosed } from "../../../../assets/images/LeapsIconClosed";
import { LeapsIconBreath } from "../../../../assets/images/LeapsIconBreath";
import { NoseIconInhale } from "../../../../assets/images/NoseIconInhale";
import { SleepBackIcon } from "../../../../assets/images/SleepBackIcon";
import { DizzinessIcon } from "../../../../assets/images/DizzinessIcon";

const BreathSleepScreen_Info = ({ navigation }) => {
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
            <Text style={styles.textHeader}>{t("description")}</Text>

            <Text style={styles.text}>
              {t("breathing_info-description")}
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>{t("exercise")}</Text>

            <View style={styles.icons}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>{t("inhale")}</Text>
                <Text style={styles.iconTextTime}>4 {t("sec")}</Text>
                <NoseIconInhale />
              </View>

              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>{t("hold")}</Text>
                <Text style={styles.iconTextTime}>7 {t("sec")}</Text>
                <LeapsIconClosed />
              </View>

              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>{t("exhale")}</Text>
                <Text style={styles.iconTextTime}>8 {t("sec")}</Text>
                <LeapsIconBreath />
              </View>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>{t("tips")}</Text>
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
      t("breathing_info-tip_1")
  },
  {
    key: "s2",
    image: <DizzinessIcon />,
    text:
      t("breathing_info-tip_2")
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
    // textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "norms-regular",
    fontSize: theme.TEXT,
    lineHeight: theme.TEXT_LINEHEIGHT,
  },
  textHeader: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: theme.HEADER,
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
    fontSize: theme.TEXT,
  },
  iconTextTime: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: theme.TEXT - 2,
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
    height: 240,
    width: "100%",
  },
  dot: {
    bottom: Dimensions.get("window").height > 800 ? -5 : 0,
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});

export default BreathSleepScreen_Info;
