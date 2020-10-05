import React from "react";
import { StyleSheet, View, Text, Dimensions, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import theme from "../theme";

import { BreathImage } from "../../assets/images/BreathImage";
import { AppIcon } from "../../assets/images/AppIcon";
import { DizzinessIcon } from "../../assets/images/DizzinessIcon";
import { Leaves } from "../../assets/images/Leaves";
import { CoolSleellow } from "../../assets/images/CoolSleellow";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";
import { NoContentManIcon } from "../../assets/images/NoContentManIcon";
import { StyledButton } from "../components/StyledButton";
import { t } from "../../assets/lang/index";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PremiumScreen = ({ navigation }) => {
  const slides = [
    {
      key: "s1",
      image: <AppIcon height={220} width={250} />,
      header: t("premium_s1_header"),
      text: t("premium_s1_text"),
    },
    {
      key: "s2",
      image: <DizzinessIcon height={220} width={250} />,
      header: t("premium_s2_header"),
      text: t("premium_s2_text"),
    },
    {
      key: "s3",
      image: <CoolSleellow height={220} width={250} />,
      header: t("premium_s3_header"),
      text: t("premium_s3_text"),
    },
    {
      key: "s4",
      image: <NoContentManIcon height={220} width={250} />,
      header: t("premium_s4_header"),
      text: t("premium_s4_text"),
      list: t("premium_s4_list"),
      textSecond: t("premium_s4_textSecond"),
    },
    {
      key: "s5",
      image: <BreathImage height={220} width={250} />,
      header: t("premium_s5_header"),
      text: t("premium_s5_text"),
      button: (
        <TouchableOpacity
          activeOpacity={theme.ACTIVE_OPACITY}
          onPress={() => onPurchaseHandler()}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{`$2.99/${t("month")}`}</Text>
          </View>
        </TouchableOpacity>
      ),
      btnDesc: (
        <Text style={styles.buttonTextDesc}>{t("premium_trial_text")}</Text>
      ),
    },
  ];

  let onPurchaseHandler = async () => {
    try {
      await AsyncStorage.setItem("@PremiumScreen:key", "purchased");
      console.log("hi");
      navigation.replace("Main");
    } catch (err) {
      console.log(err);
    }
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.image}>{item.image}</View>
          <View style={styles.textWrapper}>
            <Text style={styles.textHeader}> {item.header}</Text>
            <Text style={styles.text}> {item.text} </Text>
            <View style={styles.listContainer}>
              <Text style={{ ...styles.text, ...styles.list }}>
                {item.list}
              </Text>
            </View>
            <Text style={styles.text}> {item.textSecond} </Text>
          </View>
          {item.button}
          {item.btnDesc}
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
      showDoneButton={false}
      showNextButton={false}
      renderNextButton={() => renderSliderButton("next")}
      dotStyle={styles.dot}
      activeDotStyle={{ ...styles.dot, ...styles.activeDot }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    width: "100%",
  },
  image: {},
  text: {
    fontFamily: "norms-regular",
    fontSize: 16,
    color: "rgba(255, 255, 255, .7)",
    paddingVertical: 5,
    textAlign: "center",
    // textTransform: "uppercase"
  },
  listContainer: {
    justifyContent: "flex-start",
  },
  list: {
    color: "#fff",
    fontFamily: "norms-medium",
    textAlign: "left",
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "norms-medium",
    color: "#fff",
    textAlign: "center",
    // textTransform: "uppercase"
  },
  textWrapper: {
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
  },

  buttonContainer: {
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    fontFamily: "norms-bold",
  },
  buttonTextDesc: {
    color: theme.SECONDARY_COLOR,
    fontSize: 12,
    fontFamily: "norms-regular",
    marginTop: 10,
    opacity: 0.5,
  },

  dot: {
    width: 30,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
