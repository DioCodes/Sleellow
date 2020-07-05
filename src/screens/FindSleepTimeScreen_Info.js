import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import theme from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import AppIntroSlider from "react-native-app-intro-slider";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";
import { DizzinessIcon } from "../../assets/images/DizzinessIcon";

export const FindSLeepTimeScreen_Info = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Info",
      headerBackTitle: "Find time",
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
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const slides = [
  {
    key: "s1",
    image: <SleepBackIcon />,
    text: "A good night's sleep consists of 5-6 complete sleep cycles.",
  },
  {
    key: "s2",
    image: <DizzinessIcon />,
    text: "It takes the average human 14 minutes to fall asleep.",
  },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: theme.PRIMARY_COLOR,
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
  image: {
    marginBottom: 10,
  },
  tipsContent: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    height: 230,
    width: "100%",
    // backgroundColor: "red",
  },
  dot: {
    bottom: -10,
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
