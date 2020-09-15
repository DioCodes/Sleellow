import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import theme from "../theme";
import { HeaderModal } from "../components/HeaderModal";
import { t } from "../../assets/lang";
import { StyledButton } from "../components/StyledButton";
import { CircleMoveAnimation } from "../components/CircleMoveAnimations";
import { StarsAnimation } from "../components/StarsAnimations/StarsAnimation";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import moment from "moment";
import { HoldButton } from "../components/HoldButton";

export const DaytimeSleepScreen = ({ navigation }) => {
  const [napTime, setNapTime] = useState("20");
  const [paused, setPaused] = useState(true);
  const [pause, setPause] = useState(false);
  const [display, setDisplay] = useState("flex");
  const [displaySec, setDisplaySec] = useState("flex");
  const [currentTime, setCurrentTime] = useState(moment());
  const [progress, setProgress] = useState(0);

  let topIndent = useRef(new Animated.Value(0)).current;
  let btnOpacity = useRef(new Animated.Value(1)).current;
  let gdText = useRef(new Animated.Value(0)).current;
  let timeOpacity = useRef(new Animated.Value(0)).current;

  let startSleep = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(topIndent, {
          toValue: 30,
          duration: 2500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(btnOpacity, {
          toValue: 0,
          duration: 2500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(timeOpacity, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(gdText, {
        toValue: 0.5,
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
        setDisplay("none");
      }
    });
  };

  let stopSleep = () => {
    Animated.parallel([
      Animated.timing(topIndent, {
        toValue: 0,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(btnOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(timeOpacity, {
        toValue: 0,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start((e) => {
      if (e.finished) {
        setDisplay("flex");
        // setDisplaySec("none")
      }
    });
  };

  const GuideText = ({ text }) => {
    return (
      <Animated.View style={{ ...styles.guideContainer, opacity: gdText }}>
        <Text style={styles.textGuide}>{text}</Text>
      </Animated.View>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions(HeaderModal(navigation, t("daytime_sleep")));
  }, []);

  useEffect(() => {
    if (paused) {
      stopSleep();
    } else if (!paused) {
      startSleep();
    }

    setInterval(() => {
      setCurrentTime(moment());
      // setProgress((p) => p + .025 )
    }, 1000);
  }, [paused]);

  const stopAnim = () => {
    setPaused(true);
    !paused ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) : null;
  };

  return (
    <View style={styles.main}>
      <Animated.View
        style={{
          ...styles.pickerContainer,
          transform: [{ translateY: topIndent }],
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 150,
            width: 300,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          activeOpacity={theme.ACTIVE_OPACITY}
        >
          <CircleMoveAnimation paused={paused} />

          <Animated.View
            style={{
              ...styles.timeContainer,
              opacity: timeOpacity,
              // display: displaySec
            }}
          >
            <Text style={styles.time}>
              {currentTime.format("hh")}
              {"\n"}
              {currentTime.format("mm")}
            </Text>
          </Animated.View>
        </TouchableOpacity>

        <Animated.View
          style={{
            opacity: btnOpacity,
            display: display,
            position: "absolute",
            zIndex: 9,
          }}
        >
          <Picker
            selectedValue={napTime}
            itemStyle={{
              color: "#fff",
              width: 75,
            }}
            onValueChange={(itemValue, itemIndex) => {
              setNapTime(itemValue);
            }}
          >
            <Picker.Item label={`5 ${t("mins")}`} value="5" />
            <Picker.Item label={`10 ${t("mins")}`} value="10" />
            <Picker.Item label={`15 ${t("mins")}`} value="15" />
            <Picker.Item label={`20 ${t("mins")}`} value="20" />
            <Picker.Item label={`25 ${t("mins")}`} value="25" />
            <Picker.Item label={`30 ${t("mins")}`} value="30" />
          </Picker>
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={{
          ...styles.buttonContainer,
          opacity: btnOpacity,
          display: display,
        }}
      >
        <StyledButton
          name="Старт"
          alignSelf="center"
          onPress={() => {
            setPaused(false);
            setPause(true);
          }}
        />
      </Animated.View>

      <GuideText text={"Зажмите, чтобы остановить"} />
      <View style={{ position: "absolute", bottom: 30, marginBottom: 30 }}>
        <HoldButton
          progress={progress}
          duration={250}
          onHoldEnd={stopAnim}
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
    backgroundColor: theme.MODAL_BGC_COLOR,
    alignItems: "center",
  },
  pickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
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
    marginTop: 30,
    width: "100%",
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
    // backgroundColor: 'red',
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  textGuide: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.TEXT + 2,
    fontFamily: "norms-regular",
    opacity: 0.5,
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
    opacity: 0.5,
    textAlign: "center",
    // width: "100%",
    // backgroundColor: 'red',
  },
});
