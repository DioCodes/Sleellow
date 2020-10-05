import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import theme from "../theme";
import { HeaderModal } from "../components/HeaderModal";
import { t } from "../../assets/lang";
import { StyledButton } from "../components/StyledButton";
import { CircleMoveAnimation } from "../components/CircleMoveAnimations";
import { StarsAnimation } from "../components/StarsAnimations/StarsAnimation";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import Constants from "expo-constants";

import moment from "moment";
import { HoldButton } from "../components/HoldButton";
import { BreathImage } from "../../assets/images/BreathImage";
import { SleepBackIcon } from "../../assets/images/SleepBackIcon";
import { ShowAlarmTime } from "../components/ShowAlarmTime";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const NapScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: t("nap"),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Breath Info"
            iconName="ios-information-circle-outline"
            onPress={() => {
              navigation.push("Nap_Info");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const [napTime, setNapTime] = useState("20");
  const [paused, setPaused] = useState(true);
  const [pause, setPause] = useState(false);
  const [display, setDisplay] = useState("flex");
  const [displaySec, setDisplaySec] = useState("flex");
  const [currentTime, setCurrentTime] = useState(moment());
  const [progress, setProgress] = useState(0);

  let btnOpacity = useRef(new Animated.Value(1)).current;
  let gdText = useRef(new Animated.Value(0)).current;
  let timeOpacity = useRef(new Animated.Value(0)).current;

  let curTime = useRef(null);

  let startSleep = () => {
    Animated.sequence([
      Animated.timing(btnOpacity, {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(timeOpacity, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(gdText, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(gdText, {
        toValue: 0,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start((e) => {
      if (e.finished) {
        // setDisplay("none");
      }
    });
  };

  let stopSleep = () => {
    Animated.sequence([
      Animated.timing(timeOpacity, {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(btnOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const GuideText = ({ text }) => {
    return (
      <Animated.View style={{ ...styles.guideContainer, opacity: gdText }}>
        <Text style={styles.textGuide}>{text}</Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    // setPaused(false)
    if (paused) {
      stopSleep();
      clearInterval(curTime.current);
      console.log("paused: " + paused);
    } else {
      startSleep();
      curTime.current = setInterval(() => {
        setCurrentTime(moment());
      }, 1000);
    }
  }, [paused]);

  const stopAnim = () => {
    setPaused(true);
    !paused ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) : null;
  };

  return (
    <View style={styles.main}>
      <Animated.View style={styles.pickerContainer}>
        <CircleMoveAnimation paused={paused} />
        <Animated.View
          style={{
            opacity: btnOpacity,
            display: display,
            zIndex: 9,
            position: "absolute",
            width: "50%",
            // backgroundColor: "red",
          }}
        >
          <View
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: "100%",
              height: 1,
              position: "absolute",
              top: 86,
              zIndex: 100,
            }}
          />
          <View
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: "100%",
              height: 1,
              position: "absolute",
              bottom: 86,
              zIndex: 100,
            }}
          />
          <Picker
            selectedValue={napTime}
            itemStyle={{
              color: "#fff",
              shadowColor: "white",
            }}
            style={{}}
            onValueChange={(itemValue, itemIndex) => {
              setNapTime(itemValue);
            }}
          >
            <Picker.Item label={`10 ${t("mins")}`} value="10" />
            <Picker.Item label={`15 ${t("mins")}`} value="15" />
            <Picker.Item label={`20 ${t("mins")}`} value="20" />
            <Picker.Item label={`25 ${t("mins")}`} value="25" />
            <Picker.Item label={`30 ${t("mins")}`} value="30" />
          </Picker>
        </Animated.View>

        <Animated.View
          style={{
            ...styles.timeContainer,
            opacity: timeOpacity,
          }}
        >
          <Text style={styles.time}>
            {currentTime.format("hh")}
            {"\n"}
            {currentTime.format("mm")}
          </Text>
        </Animated.View>
      </Animated.View>

      <ShowAlarmTime time={napTime} paused={pause} />

      <GuideText text={"Зажмите, чтобы остановить"} />

      <Animated.View
        style={{
          opacity: btnOpacity,
          display: display,
          width: "100%",
          marginTop: 0,
          alignItems: "center",
        }}
      >
        {/* <View style={styles.textDescriptionContainer}>
          <Text style={styles.textDescription}>{t("nap-desc")}</Text>
        </View> */}

        <View style={styles.buttonContainer}>
          {/* {paused ? <ShowAlarmTime time={napTime} paused={paused} /> : null} */}
          <StyledButton
            name={t("start_C")}
            alignSelf="center"
            onPress={() => {
              setPaused(false);
              setPause(true);
            }}
            width={125}
          />
        </View>
      </Animated.View>

      <View style={{ position: "absolute", bottom: 30, marginBottom: 30 }}>
        <HoldButton
          progress={progress}
          duration={250}
          onHoldEnd={() => {
            setPaused(true);
            setPause(false);
            !paused
              ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              : null;
          }}
          paused={paused}
        />
      </View>

      <StarsAnimation paused={paused} pause={pause} />
    </View>
  );
};

const wh = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: "center",
  },
  pickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  hideVerticalLinesWrapper: {
    borderBottomColor: theme.MODAL_BGC_COLOR,
    borderBottomWidth: 1,
    borderTopColor: theme.MODAL_BGC_COLOR,
    borderTopWidth: 1,
    height: 44,
    width: 75,
    position: "absolute",
    zIndex: 10,
    backgroundColor: "transparent",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    zIndex: 0,
    height: 230,
    width: 230,
    // backgroundColor: 'blue',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .05)",
  },

  guideContainer: {
    // backgroundColor: "blue",
    // flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
    position: "absolute",
  },
  textGuide: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.TEXT + 2,
    fontFamily: "norms-regular",
    top: wh > 800 ? 10 : 20,
  },

  timeContainer: {
    position: "absolute",
    // width: 250,
  },
  time: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
    fontSize: 60,
    opacity: 0.75,
    textAlign: "center",
    // width: "100%",
    // backgroundColor: 'red',
  },

  textDescriptionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  textDescription: {
    color: theme.SECONDARY_COLOR,
    fontSize: 14,
    fontFamily: "norms-regular",
    opacity: 0.25,
    textAlign: "center",
  },
});
