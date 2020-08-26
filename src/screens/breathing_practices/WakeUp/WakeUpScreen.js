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
  SafeAreaView,
} from "react-native";
import * as Haptics from "expo-haptics";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Easing } from "react-native-reanimated";
import { connect, useDispatch, useSelector } from "react-redux";

import theme from "../../../theme";
import { AppHeaderIcon } from "../../../components/AppHeaderIcon";
import { NoContentManIcon } from "../../../../assets/images/NoContentManIcon";
import { t } from "../../../../assets/lang";

export const WakeUpScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: t("awakening"),
      headerTransparent: true,
      // headerRight: () => (
      //   <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      //     <Item
      //       title="Breath Info"
      //       iconName="ios-information-circle-outline"
      //       onPress={() => {
      //         navigation.navigate("WakeUpScreen_Info");
      //       }}
      //     />
      //   </HeaderButtons>
      // ),
    });
  }, []);

  const mantraText = useSelector((state) => state.mantra.mantra);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          width: "100%",
          // maxHeight: "100%",
          height: "100%",
        }}
        contentContainerStyle={{ ...styles.wrapper }}
      >
        <View style={styles.content}>
          <View style={styles.image}>
            <NoContentManIcon />
          </View>
          <Text style={styles.header}>{t("no_content_header")}</Text>
          <Text style={styles.text}>
            {t("no_content_desc")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: -60,
  },
  image: {
    marginBottom: 15,
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontSize: 26,
    fontFamily: "norms-bold",
    marginBottom: 5,
  },
  text: {
    color: theme.SECONDARY_COLOR,
    opacity: 0.5,
    fontSize: theme.TEXT,
    fontFamily: "norms-regular",
  },
});
