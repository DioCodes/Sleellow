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

export const FindSleepTimeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Find sleep time",
    });
  }, []);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showTimeToSleep, setShowTimeToSleep] = useState(false);
  const [showTimeToWakeUp, setShowTimeToWakeUp] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  const [chosenHours, setChosenHours] = useState();
  const [chosenMinutes, setChosenMinutes] = useState();

  const [chosenDate, setChosenDate] = useState("choose time");

  const [timeToFallAsleep, setTimeToFallAsleep] = useState();
  const [timeToWakeUp, setTimeToWakeUp] = useState();
  const [timeToWakeUpOpened, setTimeToWakeUpOpened] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const RenderSliderItem = ({ item }) => {
    return (
      <Text
        style={{
          ...styles.text,
          ...styles.textDescription,
        }}
      >
        {item.text}
      </Text>
    );
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
            <Text style={{ ...styles.headerTime }}>5-6 cycles</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res5}</Text>
              <Text style={{ ...styles.textTimeOr }}> or </Text>
              <Text style={{ ...styles.textTime, opacity: 1 }}>{res6}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...styles.headerTime, opacity: 0.6 }}>
              3-4 cycles
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 0.6 }}>{res3}</Text>
              <Text style={{ ...styles.textTimeOr }}> or </Text>
              <Text style={{ ...styles.textTime, opacity: 0.6 }}>{res4}</Text>
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
              1-2 cycles
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textTime, opacity: 0.25 }}>{res1}</Text>
              <Text style={{ ...styles.textTimeOr }}> or </Text>
              <Text style={{ ...styles.textTime, opacity: 0.25 }}>{res2}</Text>
            </View>
          </View>
        </View>
      );
    } else if ((res1, res2, res3, res4)) {
      returnContent = (
        <Text style={{ ...styles.textTimeAsleep }}>
          <Text style={{ opacity: 1 }}>{res1} </Text>
          <Text style={styles.textTimeOr}>or </Text>
          <Text style={{ opacity: 1 }}>{res2} </Text>
          <Text style={styles.textTimeOr}>or </Text>
          <Text style={{ opacity: 0.75 }}>{res3} </Text>
          <Text style={styles.textTimeOr}>or </Text>
          <Text style={{ opacity: 0.5 }}>{res4}</Text>
        </Text>
      );
    }
    return returnContent;
  };

  let showTime = useRef(new Animated.Value(0)).current;
  let showSecondTime = useRef(new Animated.Value(0)).current;
  let showCalc = useRef(new Animated.Value(1)).current;
  let showSecondCalc = useRef(new Animated.Value(1)).current;
  let changeContainerHeight = useRef(new Animated.Value(150)).current;
  let changeSecondContainerHeight = useRef(new Animated.Value(100)).current;

  const showBar = () => {
    Animated.parallel([
      Animated.timing(showTime, {
        duration: 500,
        toValue: 1,
      }),
      Animated.timing(showCalc, {
        duration: 500,
        toValue: 0,
      }),
      Animated.timing(changeContainerHeight, {
        duration: 500,
        toValue: 150,
      }),
    ]).start();
  };

  const hideBar = () => {
    Animated.parallel([
      Animated.timing(showTime, {
        duration: 500,
        toValue: 0,
      }),
      Animated.timing(showCalc, {
        duration: 500,
        toValue: 1,
      }),

      Animated.timing(changeContainerHeight, {
        duration: 500,
        toValue: 150,
      }),
    ]).start();
  };

  const showSecondBar = () => {
    Animated.parallel([
      Animated.timing(showSecondTime, {
        duration: 500,
        toValue: 1,
      }),
      Animated.timing(showSecondCalc, {
        duration: 500,
        toValue: 0,
      }),
      Animated.timing(changeSecondContainerHeight, {
        duration: 500,
        toValue: 170,
      }),
    ]).start();
  };

  const hideSecondBar = () => {
    Animated.parallel([
      Animated.timing(changeSecondContainerHeight, {
        duration: 500,
        toValue: 125,
      }),
      Animated.timing(showSecondCalc, {
        duration: 500,
        toValue: 1,
      }),
      Animated.timing(showSecondTime, {
        duration: 500,
        toValue: 0,
      }),
    ]).start();
  };

  const onCalculateHandler = () => {
    if (chosenDate == "choose time") {
      Alert.alert("Please choose time to wake up! ⏰");
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

      setTimeout(() => setShowTimeToSleep(true), 500);
      showBar();
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
      ? setTimeToWakeUpOpened(false)
      : setTimeToWakeUpOpened(true);

    showSecondBar();

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

  const onBackHandler = () => {
    hideBar();
    setTimeout(() => setShowTimeToSleep(false), 500);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const onBackSleepNowHandler = () => {
    hideSecondBar();
    setTimeout(() => setShowTimeToWakeUp(false), 500);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const ShowCalc = () => {
    return (
      <Animated.View
        style={{ ...styles.container, height: changeContainerHeight }}
      >
        <Animated.View style={{ ...styles.inBoxContainer, opacity: showCalc }}>
          <Text style={styles.text}> I want to wake up at:</Text>

          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{ ...styles.text, ...styles.textTime }}>
              {chosenDate}
            </Text>
          </TouchableOpacity>
          <StyledButton onPress={() => onCalculateHandler()} name="Calculate" />
        </Animated.View>
      </Animated.View>
    );
  };

  const ShowTime = () => {
    return (
      <Animated.View
        style={{ ...styles.container, height: changeContainerHeight }}
      >
        <Animated.View
          style={{
            ...styles.inBoxContainer,
            opacity: showTime,
          }}
        >
          <Text style={styles.text}>Time to fall asleep:</Text>
          <View>{timeToFallAsleep}</View>
          <StyledButton
            onPress={() => onBackHandler()}
            name={<Ionicons name="ios-arrow-back" color="#fff" size={14} />}
          />
        </Animated.View>
      </Animated.View>
    );
  };

  const SleepNow = () => {
    return (
      <View
        style={{
          ...styles.container,
        }}
      >
        <TouchableOpacity
          onPress={() => onSleepNowHandler()}
          activeOpacity={theme.ACTIVE_OPACITY}
        >
          <View
            style={{
              ...styles.boxContainer,
              // opacity: showSecondCaalc,
              marginBottom: timeToWakeUpOpened ? 5 : 0,
              ...styles.paddingContainer,
            }}
          >
            <Text style={styles.header}>Time to wake up</Text>
            <Ionicons
              name="ios-arrow-down"
              color="rgba(255, 255, 255, .25)"
              size={26}
            />
          </View>
        </TouchableOpacity>

        {timeToWakeUpOpened ? (
          <View style={{ ...styles.timeToWakeUp, ...styles.paddingContainer }}>
            <Text style={styles.text}>
              If you go to bed now, you should try to wake up at one of the
              following times:
            </Text>
            <View
              style={{
                width: "100%",
                marginTop: 10,
              }}
            >
              {timeToWakeUp}
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  const ShowSleepNowTime = () => {
    return (
      <Animated.View
        style={{
          ...styles.container,
          // height: changeSecondContainerHeight,
        }}
      >
        <Animated.View
          style={{
            ...styles.inBoxContainer,
            opacity: showSecondTime,
          }}
        >
          <Text style={styles.header}>Time to wake up:</Text>
          <View>{timeToWakeUp}</View>
          <StyledButton
            onPress={() => onBackSleepNowHandler()}
            name={<Ionicons name="ios-arrow-back" color="#fff" size={14} />}
          />
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.featureHeader}>Tips</Text>
            <Slider tips={tips} />
          </View>
          <SleepNow />
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
  "A good night's sleep consists of 5-6 full sleep cycles, each of which lasts 1.5 hours.",
  "The average person falls asleep after 14 minutes. We take this time into account.",
  "Waking up in the middle of a sleep cycle, you will feel overwhelmed..",
  "Waking up between sleep cycles, you will feel freshness and energy!",
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
    // flex: 1,
    maxWidth: "100%",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    // maxWidth: Dimensions.get("window").width,
    // height: "100%",
    width: "100%",
    paddingVertical: 15,
    marginVertical: 5,
  },
  paddingContainer: {
    paddingHorizontal: 15,
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
    fontFamily: "norms-bold",
    fontSize: 21,
    textAlign: "center",
  },
  featureHeader: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  text: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: 17,
    opacity: 0.5,
    textAlign: "justify",
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
    fontSize: 22,
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
