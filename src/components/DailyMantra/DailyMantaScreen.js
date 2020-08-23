import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import theme from "../../theme";
import { connect, useDispatch, useSelector } from "react-redux";
import { addMantra, resetMantra } from "../../store/actions/mantraActions";

export const DailyMantraScreen = ({navigation}) => {
  const [isMantraWrited, setIsMantraWrited] = useState(false);
  const [mantraValue, setMantraValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.mantra.mantra);

  const onCompletePress = () => {
    dispatch(resetMantra());
    dispatch(addMantra(mantraValue));
    if (inputValue == "") {
      dispatch(resetMantra());
    }
    setInputValue("");
    navigation.goBack()
  }

  useEffect(() => {
    if (mantraValue != "") {
      setIsMantraWrited(true);
    }
  });
  return(
    <View style={styles.main}>
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
        autoCapitalize="sentences"
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
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    backgroundColor: theme.MODAL_BGC_COLOR,
  },
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