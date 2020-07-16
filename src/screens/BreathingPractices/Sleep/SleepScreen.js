import React, { useState, useLayoutEffect, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  Animated,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { translate, t } from "i18n-js";

import theme from "../../../theme";
import { AppHeaderIcon } from "../../../components/AppHeaderIcon";
import { BreathAnimation } from "../../../components/BreathAnimation";

const SleepScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Sleep",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Breath Info"
            iconName="ios-information-circle-outline"
            onPress={() => {
              navigation.navigate("SleepScreen_Info");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const [paused, setPaused] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());
  // const [chosenDate, setChosenDate] = useState("...");
  const [napTime, setNapTime] = useState("3");
  const [napCount, setNapCount] = useState("9");

  const mantraText = useSelector((state) => state.mantra.mantra);

  let animatedBreathContainer = useRef(new Animated.Value(10)).current;
  let animatedMantraContainer = useRef(new Animated.Value(10)).current;
  let animatedMantra = useRef(new Animated.Value(0)).current;
  let animatedMantraDescriptionFirst = useRef(new Animated.Value(0)).current;
  let animatedMantraDescriptionSecond = useRef(new Animated.Value(0)).current;
  let animatedMantraDescriptionThird = useRef(new Animated.Value(0)).current;
  let animatedMantraDescriptionLast = useRef(new Animated.Value(0)).current;
  let animatedDescription = useRef(new Animated.Value(0.25)).current;
  let animatedSettings = useRef(new Animated.Value(1)).current;

  const hideDescriptionAndSettings = () => {
    const easing = Easing.in;
    Animated.sequence([
      Animated.parallel([
        Animated.timing(animatedDescription, {
          duration: 1000,
          toValue: 0,
          easing,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSettings, {
          duration: 1000,
          toValue: 0,
          easing,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(animatedBreathContainer, {
          duration: 2000,
          toValue: 30,
          easing,
        }),
        Animated.timing(animatedMantraContainer, {
          duration: 100,
          toValue: 60,
          easing,
        }),
        Animated.timing(animatedMantraDescriptionFirst, {
          duration: 2000,
          toValue: 0.5,
          easing,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(animatedMantraDescriptionFirst, {
        duration: 1000,
        toValue: 0,
        easing,
        useNativeDriver: true,
      }),
      Animated.timing(animatedMantraDescriptionSecond, {
        duration: 2000,
        toValue: 0.5,
        easing,
        useNativeDriver: true,
      }),
      Animated.delay(4000),
      Animated.timing(animatedMantraDescriptionSecond, {
        duration: 1000,
        toValue: 0,
        easing,
        useNativeDriver: true,
      }),
      Animated.timing(animatedMantraDescriptionThird, {
        duration: 2000,
        toValue: 0.5,
        easing,
        useNativeDriver: true,
      }),
      Animated.delay(5000),
      Animated.timing(animatedMantraDescriptionThird, {
        duration: 1000,
        toValue: 0,
        easing,
        useNativeDriver: true,
      }),
      Animated.timing(animatedMantraDescriptionLast, {
        duration: 4000,
        toValue: 0.5,
        easing,
        useNativeDriver: true,
      }),
      Animated.timing(animatedMantraDescriptionLast, {
        duration: 1000,
        toValue: 0,
        easing,
        useNativeDriver: true,
      }),
      Animated.timing(animatedMantra, {
        duration: 4000,
        toValue: 1,
        easing,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const showDescriptionAndSettings = () => {
    const easingOut = Easing.out;

    Animated.sequence([
      Animated.parallel([
        Animated.timing(animatedBreathContainer, {
          duration: 2000,
          toValue: 0,
          easingOut,
        }),
        Animated.timing(animatedMantraContainer, {
          duration: 2000,
          toValue: 10,
          easingOut,
        }),
        Animated.timing(animatedMantra, {
          duration: 2000,
          toValue: 0,
          easingOut,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(animatedDescription, {
          duration: 2000,
          toValue: 0.25,
          easingOut,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSettings, {
          duration: 2000,
          toValue: 1,
          easingOut,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = () => {
    hideDatePicker();
    setNapTime(napTime);
  };

  const checkNapDescription = (value) => {
    switch (value) {
      case "1":
        setNapCount("4");
        break;
      case "3":
        setNapCount("9");
        break;
      case "5":
        setNapCount("16");
        break;
      case "8":
        setNapCount("25");
        break;
      default: {
        setNapCount("4");
      }
    }
  };

  const minutesPicker = () => (
    <View
      style={{
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Picker
        selectedValue={napTime}
        itemStyle={{ color: "#fff" }}
        style={{
          // height: 200,
          width: 250,
        }}
        onValueChange={(itemValue) => {
          setNapTime(itemValue);
          checkNapDescription(itemValue);
        }}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="8" value="8" />
      </Picker>
    </View>
  );

  let timeOutBreathing = useRef(null);
  const startBreathing = () => {
    let time = 54 * 1000;
    switch (napTime) {
      case "1":
        time = 19 * 4 * 1000; // 4 breaths
        break;
      case "3":
        time = 19 * Math.round((60 * 3) / 19) * 1000;
        break;
      case "5":
        time = 19 * Math.round((60 * 5) / 19) * 1000;
        break;
      case "8":
        time = 19 * Math.round((60 * 8) / 19) * 1000;
        break;
      default: {
        time = 19 * 4 * 1000;
      }
    }

    paused
      ? (setPaused(false),
        (timeOutBreathing.current = setTimeout(() => {
          setPaused(true);
          showDescriptionAndSettings();
        }, time)),
        hideDescriptionAndSettings())
      : (setPaused(true),
        clearTimeout(timeOutBreathing.current),
        showDescriptionAndSettings());
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: "100%",
          maxHeight: "100%",
          height: "100%",
        }}
        contentContainerStyle={{ ...styles.wrapper }}
      >
        <Animated.View
          style={{
            ...styles.breathContainer,
            paddingTop: animatedBreathContainer,
          }}
        >
          <TouchableOpacity
            activeOpacity={theme.ACTIVE_OPACITY}
            onPress={() => {
              paused ? startBreathing() : null;
            }}
          >
            <View style={styles.breathAnimation}>
              <BreathAnimation paused={paused} />
            </View>
          </TouchableOpacity>
          <Animated.Text
            style={{ ...styles.description, opacity: animatedDescription }}
          >
            Tap to start the breathing practice.
          </Animated.Text>
          <Animated.View
            style={{
              ...styles.mantraContainer,
              height: animatedMantraContainer,
            }}
          >
            <Animated.Text
              style={{ ...styles.mantra, opacity: animatedMantra }}
            >
              {mantraText}
            </Animated.Text>
            <Animated.Text
              style={{
                ...styles.description,
                opacity: animatedMantraDescriptionFirst,
              }}
            >
              Close your lips, inhale through your nose.
            </Animated.Text>
            <Animated.Text
              style={{
                ...styles.description,
                opacity: animatedMantraDescriptionSecond,
              }}
            >
              Hold your breath for the 7 seconds.
            </Animated.Text>
            <Animated.Text
              style={{
                ...styles.description,
                opacity: animatedMantraDescriptionThird,
              }}
            >
              Make a whooshing sound, exhaling completely through your mouth.
            </Animated.Text>
            <Animated.Text
              style={{
                ...styles.description,
                opacity: animatedMantraDescriptionLast,
              }}
            >
              Relax and repeat your mantra.
            </Animated.Text>
          </Animated.View>
        </Animated.View>

        <Animated.View
          style={{
            ...styles.settings,
            opacity: animatedSettings,
            // display: paused ? "block" : "none",
          }}
        >
          <View style={styles.settingsContainer}>
            <Text style={styles.settingsContainerHeader}>Time</Text>

            <TouchableOpacity
              activeOpacity={theme.ACTIVE_OPACITY}
              onPress={showDatePicker}
            >
              <Text style={styles.time}>
                {napTime}{" "}
                <Text style={styles.timeMin}>
                  {napTime != 1 ? "mins" : "min"}
                </Text>{" "}
                {napCount} <Text style={styles.timeMin}>reps</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>

      <DateTimePickerModal
        headerTextIOS="Choose time for breathing"
        mode="time"
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
        customPickerIOS={minutesPicker}
        cancelTextIOS="Exit"
        is24Hour={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
  },
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  breathContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  breathAnimation: {
    marginTop: 10,
    height: 300,
    width: "100%",
  },
  settings: {
    minHeight: 100,
    width: "100%",
    marginBottom: 30,
  },
  settingsContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
    paddingHorizontal: 20,
  },
  settingsContainerHeader: {
    fontSize: theme.TEXT + 2,
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-medium",
  },
  description: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.TEXT + 2,
    fontFamily: "norms-medium",
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
  },
  mantraContainer: {
    height: 10,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  mantra: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.HEADER,
    fontFamily: "norms-medium",
    position: "absolute",
  },
  time: {
    fontSize: theme.TEXT + 2,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "norms-medium",
  },
  timeMin: {
    fontSize: theme.TEXT,
    color: "rgba(255, 255, 255, .5)",
    fontFamily: "norms-regular",
  },
});

export default SleepScreen;
