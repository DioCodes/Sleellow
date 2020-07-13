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

export const WakeUpScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Wake up",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Breath Info"
            iconName="ios-information-circle-outline"
            onPress={() => {
              navigation.navigate("WakeUpScreen_Info");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const mantraText = useSelector((state) => state.mantra.mantra);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: "100%",
          maxHeight: "100%",
          height: "100%",
        }}
        contentContainerStyle={{ ...styles.wrapper }}
      ></ScrollView>
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
});
