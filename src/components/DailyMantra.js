import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import theme from "../theme";
import { connect, useDispatch, useSelector } from "react-redux";
import { addMantra, resetMantra } from "../store/actions/mantraActions";

export const DailyMantra = () => {
  const [isMantraWrited, setIsMantraWrited] = useState(false);
  const [mantraValue, setMantraValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const bs = useRef();
  const windowHeight = Dimensions.get("window").height;

  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.mantra.mantra);

  useEffect(() => {
    if (mantraValue != "") {
      setIsMantraWrited(true);
    }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => bs.current.open()}>
        <Text style={styles.mantraHeader}>Your daily mantra:</Text>
        {allPosts != "" ? (
          <Text style={styles.mantraText}>{allPosts}</Text>
        ) : (
          <Text style={styles.text}>Write your daily mantra...</Text>
        )}
      </TouchableOpacity>
      <RBSheet
        ref={bs}
        height={windowHeight > 800 ? 735 : 675}
        openDuration={275}
        closeDuration={275}
        closeOnDragDown={true}
        closeOnPressMask={true}
        keyboardAvoidingViewEnabled={false}
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
            <Text
              style={{
                ...styles.mantraText,
                marginBottom: 20,
                fontSize: 25,
              }}
            >
              Write your daily mantra
            </Text>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255, 255, 255, .1)",
                width: "100%",
                paddingBottom: 5,
              }}
            >
              <TextInput
                style={{
                  fontFamily: "norms-regular",
                  color: "#fff",
                  fontSize: 20,
                }}
                value={inputValue}
                onChangeText={(text) => {
                  setMantraValue(text);
                  setInputValue(text);
                }}
                placeholder="I can.."
                maxLength={70}
                returnKeyType="done"
                blurOnSubmit={true}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                dispatch(resetMantra());
                dispatch(addMantra(mantraValue));
                if (inputValue == "") {
                  dispatch(resetMantra());
                }
                setInputValue("");
                bs.current.close();
              }}
            >
              <View
                style={{
                  marginTop: 30,
                  backgroundColor: "white",
                  paddingHorizontal: 30,
                  paddingVertical: 12,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "norms-medium",
                    color: "#000",
                    fontSize: theme.TEXT + 2,
                  }}
                >
                  Complete
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "norms-bold",
    color: "#fff",
    fontSize: theme.TEXT + 2,
    opacity: 0.75,
  },
  mantraHeader: {
    fontFamily: "norms-regular",
    color: "#fff",
    fontSize: theme.TEXT,
    opacity: 0.5,
  },
  mantraText: {
    fontFamily: "norms-bold",
    color: "#fff",
    fontSize: 20,
  },
  rbSheetContainer: {
    height: windowHeight > 800 ? 680 : 620,
    width: "100%",
    alignItems: "center",
  },
  sheetContainerContent: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 30,
    paddingHorizontal: 20,
  },
});
