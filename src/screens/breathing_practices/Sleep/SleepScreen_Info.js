import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as Localization from "expo-localization";
import AppIntroSlider from "react-native-app-intro-slider";

import theme from "../../../theme";
import { t } from "../../../../assets/lang";

import { AppHeaderIcon } from "../../../components/AppHeaderIcon";

import { LeapsIconClosed } from "../../../../assets/images/LeapsIconClosed";
import { LeapsIconBreath } from "../../../../assets/images/LeapsIconBreath";
import { NoseIconInhale } from "../../../../assets/images/NoseIconInhale";
import { SleepBackIcon } from "../../../../assets/images/SleepBackIcon";
import { DizzinessIcon } from "../../../../assets/images/DizzinessIcon";
import { HeaderModal } from "../../../components/HeaderModal";

const BreathSleepScreen_Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      HeaderModal(navigation, t("info"))
    )
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
      {/* <View style={styles.top}>
        <Text style={styles.topHeader}>
          {t("info")}
        </Text>
      </View> */}
      <ScrollView>
        {/* <View> */}
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
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const wh = Dimensions.get("window").height;
const locale = Localization.locale.substr(0,2)

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
    paddingTop: 5
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
    height: wh > 800 && locale === "ru-US" ? "24%" : "22%", 
    justifyContent: locale === "en" ? "flex-start" : "center"
  },
  text: {
    color: "#fff",
    // textAlign: "justify",
    textAlign: "center", 
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
    bottom: wh > 800 && locale === "en" ? -0 : wh < 800 ? -5 : -20,
    // locale === "en" ? "flex-start" : "center"
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});

export default BreathSleepScreen_Info;
