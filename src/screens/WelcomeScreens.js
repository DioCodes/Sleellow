import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export const WelcomeScreens = ({ navigation }) => {
  const onDoneHandler = () => {
    navigation.replace("Main");
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.wrapper}>
        <Image
          style={{ ...styles.image, ...item.imageSize }}
          source={item.image}
        />
        <View style={styles.textWrapper}>
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
    paddingBottom: 100,
    backgroundColor: "#000",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 22,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  textWrapper: {
    height: "5%",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: "40%",
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
    text: "Best rest order.",
    image: require("../../assets/images/pillow.png"),
    imageSize: {
      width: 200,
      height: 215,
    },
  },
  {
    key: "s2",
    text: "Tracking, btreathing and statistics",
    image: require("../../assets/images/stats.png"),
  },
  {
    key: "s3",
    text: "About important things.",
    image: require("../../assets/images/breath.png"),
  },
];
