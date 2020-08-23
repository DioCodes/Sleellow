import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Picker,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import theme from "../theme";
import moment from "moment";
import { ShowScreenRide } from "../components/ShowScreenRide";
import { Container } from "../components/Container";
import TimerDisp from "../components/Timer/TimerDisp";
import { useDispatch } from "react-redux";

import { DailyMantraButton } from "../components/DailyMantra/DailyMantraButton";
import { SleepRoutine } from "../components/SleepRoutine";
import { ScrollView } from "react-native-gesture-handler";

const MainScreen = (props) => {
  const [napTime, setNapTime] = useState("45");

  const [napDescription, setNapDescription] = useState(
    "Boosts alertness and energy"
  );

  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const dispatch = useDispatch();
  const bs = useRef();
  const windowHeight = Dimensions.get("window").height;

  const checkNapDescription = (index, value) => {
    if (index == "0") {
      setNapDescription("Boosts alertness and energy");
    } else if (index == "1") {
      setNapDescription("Increase memory and focus");
    } else if (index == "2") {
      setNapDescription("Best for restoration and relaxation");
    }

    setNapTime(value);
  };

  const AlarmDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>
          Sleep duration up to {napTime} mins
        </Text>
        <Text style={styles.descriptionText}>{napDescription}</Text>
      </View>
    );
  };

  const CheckBox = () => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, .1)",
          borderRadius: 2,
          height: 25,
          width: 25,
          backgroundColor: toggleCheckBox ? "white" : "transparent",
        }}
        active={theme.ACTIVE_OPACITY}
        onPress={() =>
          toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
        }
      >
        {toggleCheckBox ? (
          <View
            style={{
              width: 25,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-checkmark" size={26} color="black" />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  const AlarmSettings = () => (
    <View style={styles.alarmSettings}>
      <Text style={styles.alarmSettingsText}>Breathing</Text>
      <CheckBox />
    </View>
  );

  const ShowPicker = () => (
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
          // backgroundColor: "red",
          // height: 200,
          width: 250,
        }}
        onValueChange={(itemValue, itemIndex) => {
          AlarmDescription(itemIndex);
          setNapTime(itemValue);
          checkNapDescription(itemIndex, itemValue);
        }}
      >
        <Picker.Item label="Power nap" value="20" />
        <Picker.Item label="Recovery nap" value="45" />
        <Picker.Item label="Full sleep cycle" value="120" />
      </Picker>
    </View>
  );

  return (
    <ShowScreenRide>
      <View style={styles.main}>
        <DailyMantraButton navigation={props.navigation} />

        <ScrollView>
          <Container
            name="Sleep time"
            onPress={() => {
              props.navigation.navigate("SleepTime");
            }}
          />
          <Container
            name="Breathing practices"
            onPress={() => {
              // props.navigation.navigate("BreathScreen");
              props.navigation.navigate("BreathingPractices");
            }}
          />
        </ScrollView>
        <RBSheet
          ref={bs}
          height={windowHeight > 800 ? 735 : 675}
          openDuration={275}
          closeDuration={275}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "#rgba(0, 0, 0, 0.85)",
            },
            container: {
              backgroundColor: theme.PRIMARY_COLOR,
            },
          }}
          animationType="fade"
        >
          <View style={styles.rbSheetContainer}>
            <View style={styles.sheetContainerContent}>
              <ShowPicker />
              <AlarmDescription />
              <TimerDisp
                props={props}
                time={napTime}
                navigation={props.navigation}
                onPress={() => bs.current.close()}
              />
              <AlarmSettings />
            </View>
          </View>
        </RBSheet>
      </View>
    </ShowScreenRide>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: windowHeight > 800 ? "0%" : "3%",
  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 16,
    textAlign: "center",
  },
  rbSheetContainer: {
    height: windowHeight > 800 ? 680 : 620,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 17,
    height: 50,
    borderBottomColor: "rgba(255, 255, 255, .1)",
    borderBottomWidth: 0.25,
  },
  headerName: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-bold",
    fontSize: 22,
  },
  headerButton: {
    color: theme.TERTIARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-regular",
  },
  headerButtonSave: {
    fontFamily: "norms-bold",
  },
  sheetContainerContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "blue",
  },
  descriptionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionHeader: {
    color: "#fff",
  },
  descriptionText: {
    color: "#fff",
    opacity: 0.4,
  },
  alarmSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, .1)",
  },
  alarmSettingsText: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-regular",
    fontSize: 18,
  },
});

export default MainScreen;
