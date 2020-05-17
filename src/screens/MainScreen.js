import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Picker } from "react-native";
import { ShowScreenRide } from "../components/ShowScreenRide";
import { Container } from "../components/Container";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import theme from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export const MainScreen = ({ navigation }) => {
  const [napTime, setNapTime] = useState("20");
  const [isDisabled, setIsDisabled] = useState(true);
  const [napIndex, setNapIndex] = useState(0);
  const [napValue, setNapValue] = useState("20");
  const [napName, setNapName] = useState("Power nap");
  const [headerNapName, setHeaderNapName] = useState("Power nap");
  const bs = useRef();
  const windowHeight = Dimensions.get("window").height;

  const checkHeaderNapName = (index) => {
    if (index == "0") {
      setHeaderNapName("Power nap");
    } else if (index == "1") {
      setHeaderNapName("Recovery nap");
    } else if (index == "2") {
      setHeaderNapName("Full sleep cycle");
    }
  };

  const onSaveHandler = (index, value) => {
    if (index == "0") {
      setNapName("Power nap");
    } else if (index == "1") {
      setNapName("Recovery nap");
    } else if (index == "2") {
      setNapName("Full sleep cycle");
    }

    setNapTime(value);
  };

  const checkIsSaveDisabled = (value) => {
    if (value == napTime) {
      console.log(napTime);
      console.log(value);
      return setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <ShowScreenRide>
      <View style={styles.main}>
        <Container
          name="Find time to fall asleep"
          icon={
            <Ionicons
              name="ios-arrow-forward"
              color="rgba(0, 0, 0, .2)"
              size={30}
            />
          }
          onPress={() => navigation.navigate("FindTime")}
        />
        <Container
          name={napName}
          icon={<Text style={styles.text}>{napTime}:00 mins </Text>}
          onPress={() => bs.current.open()}
        />
        <RBSheet
          ref={bs}
          height={windowHeight > 800 ? 735 : 675}
          openDuration={275}
          onClose={() => setIsDisabled(true)}
          closeDuration={275}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "#rgba(0, 0, 0, 0.85)",
            },
            draggableIcon: {
              display: "none",
            },
            container: {
              backgroundColor: theme.PRIMARY_COLOR,
            },
          }}
          animationType="fade"
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  bs.current.close(),
                    setTimeout(() => {
                      setHeaderNapName(napName), setNapValue(napTime);
                    }, 100);
                }}
              >
                <Text style={styles.headerButton}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerName}>{headerNapName}</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={isDisabled}
                onPress={() => {
                  bs.current.close(), onSaveHandler(napIndex, napValue);
                }}
              >
                <Text
                  style={{
                    ...styles.headerButton,
                    ...styles.headerButtonSave,
                    color: isDisabled ? "#31353B" : theme.TERTIARY_COLOR,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainSheetContainer}>
              <Picker
                selectedValue={napValue}
                itemStyle={{ color: "#fff" }}
                style={{
                  // backgroundColor: "black",
                  width: 125,
                  height: 150,
                  justifyContent: "center",
                }}
                onValueChange={(itemValue, itemIndex) => {
                  checkIsSaveDisabled(itemValue);
                  checkHeaderNapName(itemIndex);
                  setNapValue(itemValue);
                  setNapIndex(itemIndex);
                }}
              >
                <Picker.Item label="20:00 mins" value="20" />
                <Picker.Item label="45:00 mins" value="45" />
                <Picker.Item label="120:00 mins" value="120" />
              </Picker>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: windowHeight > 800 ? "15%" : "10%",
  },
  text: {
    fontFamily: "norms-regular",
    fontSize: 16,
    textAlign: "center",
  },
  mainSheetContainer: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});
