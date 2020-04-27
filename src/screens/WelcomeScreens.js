import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AppIcon } from "../../assets/images/AppIcon";
import { StatsImage } from "../../assets/images/StatsImage";
import { BreathImage } from "../../assets/images/BreathImage";

import * as firebase from "firebase";

export const WelcomeScreens = ({ navigation }) => {
  const onDoneHandler = () => {
    navigation.replace("Login");
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
      renderSkipButton={() => renderSliderButton("skip")}
      dotStyle={{
        ...styles.dot,
        backgroundColor: "rgba(255, 255, 255, .2)",
      }}
      activeDotStyle={styles.dot}
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
    top: Dimensions.get("window").height > 800 ? "30%" : "27%",
  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 18,
    color: "rgba(255, 255, 255, .7)",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 23,
    // backgroundColor: "red",
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
    backgroundColor: "white",
    width: 30,
    height: 3,
  },
});

const slides = [
  {
    key: "s1",
    header: "Welcome!",
    text: "I'm Sleellow! Your assistant who will help you improve your sleep.",
    image: <AppIcon />,
  },
  {
    key: "s2",
    header: "How it works?",
    text:
      "Sleellow tracks your sleep time and help you sleep better and go to bed on time!",
    image: <StatsImage />,
  },
  {
    key: "s3",
    header: "About important things.",
    text:
      "To make it easier for you to fall asleep & feels cheerful in the morning, Sleellow offers to you good breathing practices.",
    image: <BreathImage />,
  },
];
