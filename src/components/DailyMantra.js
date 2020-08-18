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

  const onCompletePress = () => {
    dispatch(resetMantra());
    dispatch(addMantra(mantraValue));
    if (inputValue == "") {
      dispatch(resetMantra());
    }
    setInputValue("");
    bs.current.close();
  }

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
          draggableIcon: {
            display: 'none'
          },
          container: {
            backgroundColor: theme.MODAL_BGC_COLOR,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}
        animationType="fade"
      >
        <View style={styles.top}>
              <Text style={styles.topHeader}>Your daily mantra</Text>
          </View>

          <View style={styles.sheetContainerContent}>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "rgba(255, 255, 255, .5)",
                width: "100%",
                paddingBottom: 5,
                marginBottom: 20
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
                placeholder="Write your daily mantra here.."
                maxLength={70}
                returnKeyType="done"
                blurOnSubmit={true}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.completeBtnContainer}>
              <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => onCompletePress()}>
                <View style={styles.completeBtn}>
                  <Text style={styles.completeBtnText}>Complete</Text>
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
  sheetContainerContent: {
    // justifyContent: "center",
    // width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  top: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // backgroundColor: "rgba(255, 255, 255, .1)",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, .05)',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  topHeader: {
    fontSize: 18,
    color: theme.SECONDARY_COLOR,
    fontFamily: 'norms-bold',
  },
  completeBtnContainer: {
    width: '50%',
    height: 50,
    // marginTop: 25,
    alignSelf: 'flex-end'
  },
  completeBtn: {
    width: '100%',
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .1)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  completeBtnText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "norms-medium",
  }
});
