import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AppIcon } from "../../assets/images/AppIcon";
import { StatsImage } from "../../assets/images/StatsImage";
import { BreathImage } from "../../assets/images/BreathImage";
import { t } from "../../assets/lang/index";

export const WelcomeScreens = ({ navigation }) => {
  let onDoneHandler = async () => {
    try {
      await AsyncStorage.setItem("@WelcomeScreen:key", "firstEnter");
      navigation.replace("Main");
    } catch (err) {
      console.log(err);
    }
  };

  const Img = ({ children }) => {
    return <View style={styles.image}>{children}</View>;
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.wrapper}>
        <Img>{item.image}</Img>
        <View style={styles.textWrapper}>
          <Text style={{ ...styles.textHeader }}>{item.header}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const renderSliderButton = (name) => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSliderItem}
      onDone={onDoneHandler}
      showSkipButton={true}
      renderNextButton={() => renderSliderButton("next")}
      renderDoneButton={() => renderSliderButton("done")}
      dotStyle={styles.dot}
      activeDotStyle={{ ...styles.dot, ...styles.activeDot }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  image: {
    position: "absolute",
    top: Dimensions.get("window").height > 800 ? "29%" : "30%",
  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 18,
    color: "rgba(255, 255, 255, .7)",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 23,
  },
  textHeader: {
    position: "relative",
    top: 0,
    fontSize: 25,
    fontFamily: "norms-medium",
    opacity: 1,
    color: "#fff",
  },
  textWrapper: {
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    position: "absolute",
    bottom: Dimensions.get("window").height > 800 ? "31%" : "26%",
    height: 110,
  },
  buttonContainer: {
    width: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "norms-medium",
  },
  dot: {
    width: 30,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  activeDot: {
    backgroundColor: "#fff",
  },
});

const slides = [
  {
    key: "s1",
    header: t("welcome_one_header"),
    text: t("welcome_one_text"),
    image: <AppIcon />,
  },
  {
    key: "s2",
    header: t("welcome_two_header"),
    text: t("welcome_two_text"),
    image: <StatsImage />,
  },
  {
    key: "s3",
    header: t("welcome_three_header"),
    text: t("welcome_three_text"),
    image: <BreathImage />,
  },
];
