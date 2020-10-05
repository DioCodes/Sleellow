import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import * as Localization from "expo-localization";
import AppIntroSlider from "react-native-app-intro-slider";

import theme from "../theme";
import { t } from "../../assets/lang";

import { HeaderModal } from "../components/HeaderModal";
import { EasyWakeUp } from "../../assets/images/EasyWakeUp";
import { HardWakeUp } from "../../assets/images/HardWakeUp";
import { ParalysisWakeUp } from "../../assets/images/ParalysisWakeUp";

export const NapScreen_Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(HeaderModal(navigation, t("info")));
  }, []);

  const Img = ({ children }) => {
    return <View style={styles.image}>{children}</View>;
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.tipsContent}>
        <Img>{item.image}</Img>
        <View style={styles.textSlideWrapper}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>{t("description")}</Text>
          <Text style={styles.text}>{t("nap-desc")}</Text>
        </View>

        {/* <View style={styles.textContainer}>
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
        </View> */}

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
      </ScrollView>
    </View>
  );
};

const wh = Dimensions.get("window").height;
const locale = Localization.locale.substr(0, 2);

const slides = [
  {
    key: "s1",
    image: <EasyWakeUp width={183 / 1.5} height={194 / 1.5} />,
    text:
      "Для дневного сна достаточно поспать 2 стадии сна. В этих стадиях легко проснуться, зарядиться энергией и это не повлияет на ночной сон.",
  },
  {
    key: "s2",
    image: <HardWakeUp width={183 / 1.5} height={194 / 1.5} />,
    text:
      "Когда вы спите 3-5 стадий, ваш организм впадает в глубокий сон из которого трудно выбраться. Если проснуться во время этих стадии, вы можете почувствовать себя уставшим и разбитым.",
  },
  {
    key: "s3",
    image: <ParalysisWakeUp width={183 / 1.5} height={194 / 1.5} />,
    text:
      "Если проснуться во время 5-й стадии сна, вы можете попасть в сонный паралич или видеть сны наяву.",
  },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: theme.PRIMARY_COLOR,
    paddingTop: 5,
  },
  container: {
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: 15,
  },
  textSlideWrapper: {
    // height: "22%",
    // backgroundColor: 'blue',
    // height: wh > 800 && locale === "ru" ? "24%" : "22%",
    height: wh > 800 && locale === "ru" ? 80 : 80,
    // justifyContent: locale === "en" ? "flex-start" : "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  text: {
    color: "#fff",
    // textAlign: "justify",
    textAlign: "center",
    paddingHorizontal: 20,
    opacity: 0.85,
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
    // marginBottom: 10,
    marginTop: 5,
  },
  tipsContent: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    // height: 240,
    width: "100%",
  },

  dot: {
    bottom: wh > 800 && locale === "en" ? -0 : wh < 800 ? -45 : -20,
    // locale === "en" ? "flex-start" : "center"
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
