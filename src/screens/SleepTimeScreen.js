import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
  Dimensions,
} from "react-native";
import { StyledButton } from "../components/StyledButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import theme from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import AppIntroSlider from "react-native-app-intro-slider";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Slider } from "../components/Slider";
import { color } from "react-native-reanimated";
import { ShowScreenRide } from "../components/ShowScreenRide";
import { t } from "../../assets/lang";

export const SleepTimeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: t("sleep_time"),
    });
  }, []);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showTimeToSleep, setShowTimeToSleep] = useState(false);
  const [showTimeToWakeUp, setShowTimeToWakeUp] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  const [chosenHours, setChosenHours] = useState();
  const [chosenMinutes, setChosenMinutes] = useState();

  const [chosenDate, setChosenDate] = useState("...");

  const [timeToFallAsleep, setTimeToFallAsleep] = useState();
  const [timeToWakeUp, setTimeToWakeUp] = useState();
  const [timeToWakeUpOpened, setTimeToWakeUpOpened] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const findTimeToFallAsleep = (timeFirst) => {
    let h = (timeFirst.getHours() < 10 ? "0" : "") + timeFirst.getHours();
    let m = (timeFirst.getMinutes() < 10 ? "0" : "") + timeFirst.getMinutes();
    return h + ":" + m;
  };

  const timeToFallAsleepColors = (res1, res2, res3, res4, res5, res6) => {
    let returnContent;
    if ((res1, res2, res3, res4, res5, res6)) {
      returnContent = (
        <View
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime }}>6-5 {t("cycles")}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res6}</Text>
              <Text style={{ ...styles.textTimeOr }}> {t("or")} </Text>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res5}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime, opacity: 0.5 }}>
              4-3 {t("cycles-2")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 0.5 }}>{res4}</Text>
              <Text style={{ ...styles.textTimeOr }}> {t("or")} </Text>
              <Text style={{ ...styles.textTime, opacity: 0.5 }}>{res3}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime, opacity: 0.25 }}>
              2-1 {t('cycles-2')}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 0.25 }}>{res2}</Text>
              <Text style={{ ...styles.textTimeOr }}> {t("or")} </Text>
              <Text style={{ ...styles.textTime, opacity: 0.25 }}>{res1}</Text>
            </View>
          </View>
        </View>
      );
    } else if ((res1, res2, res3, res4)) {
      returnContent = (
        <View
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime }}>6-5 {t("cycles")}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res1}</Text>
              <Text style={{ ...styles.textTimeOr }}> {t("or")} </Text>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res2}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime, opacity: 0.5 }}>
              4-3 {t("cycles-2")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 0.5 }}>{res3}</Text>
              <Text style={{ ...styles.textTimeOr }}> {t("or")} </Text>
              <Text style={{ ...styles.textTime, opacity: 0.5 }}>{res4}</Text>
            </View>
          </View>
        </View>
      );
    }
    return returnContent;
  };

  let showTime = useRef(new Animated.Value(0)).current;
  let showTime_Height = useRef(new Animated.Value(0)).current;

  let containerHeight = showTime_Height.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const showBar = () => {
    Animated.parallel([
      Animated.timing(showTime, {
        duration: 1500,
        toValue: 1,
        useNativeDriver: false
      }),

      Animated.timing(showTime_Height, {
        duration: 2500,
        toValue: 100,
        useNativeDriver: false
      }),
    ]).start();
  };

  const hideBar = () => {
    Animated.parallel([
      Animated.timing(showTime, {
        duration: 1500,
        toValue: 0,
        useNativeDriver: false
      }),
      Animated.timing(showTime_Height, {
        duration: 1500,
        toValue: 0,
        useNativeDriver: false
      }),
    ]).start();
  };

  const onCalculateHandler = () => {
    if (chosenDate == "...") {
      // Alert.alert("Please choose time to wake up! ⏰");
      showDatePicker()
    } else {
      let d = new Date();
      d.setHours(chosenHours);
      d.setMinutes(chosenMinutes);
      // time to fall asleep
      let last = new Date(d.getTime() - 270 * 60000); // chosenDate - 4:30 h
      let result3 = new Date(last.getTime() - 90 * 60000); // chosenDate - 6:00 h
      let result2 = new Date(result3.getTime() - 90 * 60000); // chosenDate - 7:30 h
      let first = new Date(result2.getTime() - 90 * 60000); // chosenDate - 9:00 h

      first = findTimeToFallAsleep(first);
      result2 = findTimeToFallAsleep(result2);
      result3 = findTimeToFallAsleep(result3);
      last = findTimeToFallAsleep(last);
      setTimeToFallAsleep(
        timeToFallAsleepColors(first, result2, result3, last)
      );

      // setTimeout(() => setShowTimeToSleep(true), 500);

      showTimeToSleep ? setShowTimeToSleep(false) : setShowTimeToSleep(true);
      // showBar();
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const onSleepNowHandler = () => {
    let zd = new Date(Date.now());

    // time to fall asleep
    let res1 = new Date(zd.getTime() + 104 * 60000); // chosenDate - 4:30 h
    let res2 = new Date(res1.getTime() + 90 * 60000); // chosenDate - 6:00 h
    let res3 = new Date(res2.getTime() + 90 * 60000); // chosenDate - 7:30 h
    let res4 = new Date(res3.getTime() + 90 * 60000); // chosenDate - 9:00 h
    let res5 = new Date(res4.getTime() + 90 * 60000); // chosenDate - 9:00 h
    let res6 = new Date(res5.getTime() + 90 * 60000); // chosenDate - 9:00 h

    res1 = findTimeToFallAsleep(res1);
    res2 = findTimeToFallAsleep(res2);
    res3 = findTimeToFallAsleep(res3);
    res4 = findTimeToFallAsleep(res4);
    res5 = findTimeToFallAsleep(res5);
    res6 = findTimeToFallAsleep(res6);

    setTimeToWakeUp(timeToFallAsleepColors(res1, res2, res3, res4, res5, res6));

    timeToWakeUpOpened
      ? (setTimeToWakeUpOpened(false), hideBar())
      : (setTimeToWakeUpOpened(true), showBar());

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    let h = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let m = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    setChosenHours(h);
    setChosenMinutes(m);
    setPickerDate(date);
    setChosenDate(`${h}:${m}`);
  };

  const ShowCalc = () => {
    return (
      <Animated.View
        style={{
          ...styles.container,
        }}
      >
        <TouchableOpacity
          activeOpacity={theme.ACTIVE_OPACITY}
          onPress={() => onCalculateHandler()}
        >
          <View
            style={{
              ...styles.boxContainer,
              ...styles.paddingContainer,
              marginBottom: showTimeToSleep ? 5 : 0,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.header}>{t("sleep_time-wake_up")}</Text>

              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                activeOpacity={theme.ACTIVE_OPACITY}
                onPress={showDatePicker}
              >
                <Text
                  style={{
                    ...styles.header,
                    fontFamily: "norms-regular",
                    // opacity: chosenDate == "..." ? 0.5 : 1,
                    textDecorationLine: "underline",
                    textDecorationColor: "rgba(255,255,255,.2)",
                  }}
                >
                  {chosenDate}
                </Text>
              </TouchableOpacity>
            </View>

            <Ionicons
              name="ios-arrow-down"
              color="rgba(255, 255, 255, .25)"
              size={26}
            />
          </View>
        </TouchableOpacity>

        {showTimeToSleep ? (
          <View style={{ ...styles.timeToWakeUp, ...styles.paddingContainer }}>
            {/* <Text style={styles.text}>
              The average person falls asleep after 14 minutes!
              {"\n"}
            </Text> */}
            <Text style={styles.text}>
              {t("sleep_time-wake_up-desc_1")} {chosenDate}{t("sleep_time-wake_up-desc_2")}
            </Text>
            <View
              style={{
                width: "100%",
                marginTop: 10,
              }}
            >
              {timeToFallAsleep}
            </View>
          </View>
        ) : null}
      </Animated.View>
    );
  };

  const SleepNow = () => {
    return (
      <Animated.View
        style={{
          ...styles.container,
          flex: -1,
        }}
      >
        <TouchableOpacity
          onPress={() => onSleepNowHandler()}
          activeOpacity={theme.ACTIVE_OPACITY}
        >
          <View
            style={{
              ...styles.boxContainer,
              marginBottom: timeToWakeUpOpened ? 5 : 0,
              ...styles.paddingContainer,
            }}
          >
            <Text style={styles.header}>{t("sleep_time-fall_asleep_now")}</Text>
            <Ionicons
              name="ios-arrow-down"
              color="rgba(255, 255, 255, .25)"
              size={26}
            />
          </View>
        </TouchableOpacity>

        {timeToWakeUpOpened ? (
          <Animated.View
            style={{
              ...styles.timeToWakeUp,
              ...styles.paddingContainer,
              // opacity: showTime,
              // height: containerHeight,
            }}
          >
            <Text style={styles.text}>
              {t("sleep_time-fall_asleep_now-desc")}
            </Text>
            <View style={{ marginTop: 10 }}>{timeToWakeUp}</View>
          </Animated.View>
        ) : null}
      </Animated.View>
    );
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={{ marginVertical: 5 }}>
            <Slider tips={tips} />
          </View>
          <SleepNow />
          <ShowCalc />
        </View>
      </ScrollView>
      <DateTimePickerModal
        headerTextIOS="Choose a time to wake up"
        mode="time"
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
        date={pickerDate}
        cancelTextIOS="Exit"
        is24Hour={false}
      />
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const tips = [
  t("sleep_time-tip_1"),
  t("sleep_time-tip_2"),
  t("sleep_time-tip_3"),
  t("sleep_time-tip_4"),
];

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    maxWidth: "100%",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    // maxWidth: Dimensions.get("window").width,
    // height: "100%",
    width: "100%",
    maxWidth: "100%",
    paddingVertical: 15,
    marginVertical: 5,
  },
  paddingContainer: {
    paddingHorizontal: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    width: "100%",
  },
  inBoxContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    height: "100%",
    width: "100%",
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontFamily: theme.CONTAINER_FONT_FAMILY,
    fontSize: theme.CONTAINER_HEADER,
    textAlign: "center",
  },
  text: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: theme.TEXT,
    lineHeight: theme.TEXT_LINEHEIGHT,
    opacity: 0.5,
    // textAlign: "justify",
  },
  textDesctiptionContainer: {
    width: "100%",
  },
  timeContainer: {
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerTime: {
    fontSize: 24,
    fontFamily: "norms-bold",
    color: theme.SECONDARY_COLOR,
  },
  time: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "norms-bold",
  },
  time2: {
    opacity: 0.6,
  },
  time3: {
    opacity: 0.25,
  },
  textTime: {
    fontSize: 24,
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
  },
  textTimeAsleep: {
    color: theme.SECONDARY_COLOR,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "norms-bold",
    lineHeight: 27,
  },
  textTimeOr: {
    fontSize: 24,
    opacity: 0.15,
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
  },

  timeToWakeUp: {
    // flex: 1,
    width: "100%",
  },
  infoIcon: {
    marginRight: 10,
  },
  pagination: {
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 5,
    backgroundColor: "rgba(255, 255, 255, .15)",
  },
  activeDot: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
