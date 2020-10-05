import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";

import { addMantra, resetMantra } from "../../store/actions/mantraActions";
import theme from "../../theme";
import { t } from "../../../assets/lang";
import { HeaderModal } from "../HeaderModal";
import { StyledButton } from "../StyledButton";

export const DailyMantraScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(HeaderModal(navigation, t("mantra_header")));
  }, []);

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onCompletePress = () => {
    dispatch(addMantra(inputValue));
    if (inputValue == "") {
      dispatch(resetMantra());
    }
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={styles.sheetContainerContent}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "rgba(255, 255, 255, .1)",
            width: "100%",
            paddingBottom: 5,
            marginBottom: 20,
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
              setInputValue(text);
            }}
            placeholder={t("mantra_input_desc")}
            maxLength={70}
            returnKeyType="done"
            blurOnSubmit={true}
            autoCapitalize="sentences"
            autoCorrect={false}
          />
        </View>

        <StyledButton
          name={t("complete_C")}
          onPress={() => onCompletePress()}
          alignSelf="flex-end"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  sheetContainerContent: {
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
