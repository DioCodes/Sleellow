import React, { useState, useLayoutEffect, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Picker,
  Animated,
  Switch,
} from "react-native";
import * as Haptics from "expo-haptics";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { translate, t } from "i18n-js";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Easing } from "react-native-reanimated";
import { connect, useDispatch, useSelector } from "react-redux";

import theme from "../../../theme";
import { AppHeaderIcon } from "../../../components/AppHeaderIcon";
import { BreathAnimation } from "../../../components/BreathAnimation";
import { StyledButton } from "../../../components/StyledButton";

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
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const mantraText = useSelector((state) => state.mantra.mantra);

  let animatedMantra = useRef(new Animated.Value(0)).current;
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
      Animated.timing(animatedMantra, {
        duration: 500,
        toValue: 0,
        easingOut,
        useNativeDriver: true,
      }),
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
      case "3":
        setNapCount("9");
        break;
      case "5":
        setNapCount("15");
        break;
      case "8":
        setNapCount("24");
        break;
      default: {
        setNapCount("9");
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
      case "3":
        time = 19 * ((57 * 3) / 19) * 1000;
        break;
      case "5":
        time = 19 * ((57 * 5) / 19) * 1000;
        break;
      case "8":
        break;
      default: {
        time = 19 * ((57 * 8) / 19) * 1000;
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
        <View style={styles.breathContainer}>
          <TouchableOpacity
            activeOpacity={theme.ACTIVE_OPACITY}
            onPress={() => {
              startBreathing();
            }}
          >
            <View style={styles.breathAnimation}>
              <BreathAnimation paused={paused} />
            </View>
          </TouchableOpacity>
          <Animated.Text
            style={{ ...styles.description, opacity: animatedDescription }}
          >
            Tap to start/stop breathing practice.
          </Animated.Text>
          <Animated.View
            style={{
              alignItems: "center",
              opacity: animatedMantra,
              backgroundColor: "red",
            }}
          >
            <Text style={styles.mantra}>{mantraText}</Text>
            <Text style={{ ...styles.mantraDescription }}>
              Relax and repeat your mantra.
            </Text>
          </Animated.View>
        </View>

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
          <View style={{ ...styles.settingsContainer, borderTopWidth: 0 }}>
            <Text style={styles.settingsContainerHeader}>Show mantra</Text>

            <Switch
              trackColor={{
                false: "rgba(255,255,255, .1)",
                true: "transparent",
              }}
              thumbColor={isEnabled ? "#fff" : "rgba(255,255,255, .5)"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
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
        date={pickerDate}
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
    // justifyContent: "space-between",
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
    minHeight: 150,
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
    fontSize: 20,
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-medium",
  },
  description: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-medium",
    position: "absolute",
    bottom: 0,
    opacity: 0.5,
  },
  mantra: {
    color: theme.SECONDARY_COLOR,
    fontSize: 26,
    fontFamily: "norms-medium",
    position: "absolute",
    bottom: -70,
  },
  mantraDescription: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-regular",
    opacity: 0.25,
    position: "absolute",
    bottom: -40,
  },
  time: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "norms-medium",
  },
  timeMin: {
    fontSize: 16,
    color: "rgba(255, 255, 255, .5)",
    fontFamily: "norms-regular",
  },
});

export default SleepScreen;
