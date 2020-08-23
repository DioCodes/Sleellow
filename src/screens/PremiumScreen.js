import React from "react";
import { StyleSheet, View, Text, Dimensions, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import theme from "../theme";

export const PremiumScreen = () => {
  const slides = [
    {
      key: "s1",
      header: "",
      text: "",
      image: "",
    },
    {
      key: "s2",
      header: "",
      text: "",
      image: "",
    },
    {
      key: "s3",
      header: "",
      text: "",
      image: "",
    },
  ];

  const renderSliderItem = ({ item }) => {
    <View style={styles.wrapper}>
      <View style={styles.image}>{item.image}</View>;
      <View style={styles.textWrapper}>
        <Text style={styles.textHeader}>{item.header}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  }

  const renderSliderButton = (name) => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    );
  };

  return(
    <View style={styles.wrapper}>
      <AppIntroSlider
        data={slides}
        renderItem={renderSliderItem}
        showDoneButton={false}
        renderNextButton={() => renderSliderButton("next")}
        dotStyle={styles.dot}
        activeDotStyle={{ ...styles.dot, ...styles.activeDot }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.PRIMARY_COLOR,
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
    color: theme.SECONDARY_COLOR,
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
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-medium",
  },

  dot: {
    width: 30,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
})

