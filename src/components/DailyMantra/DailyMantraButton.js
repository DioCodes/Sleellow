import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../theme";
import { useSelector } from "react-redux";
import { t } from "../../../assets/lang";

export const DailyMantraButton = ({ navigation }) => {
  const mantraText = useSelector((state) => state.mantra.mantra);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.push("MantraModal")}
      >
        <Text style={styles.mantraHeader}>{t("mantra_header")}:</Text>
        {mantraText != "" ? (
          <Text style={styles.mantra}>{mantraText}</Text>
        ) : (
          <Text style={styles.text}>{t("mantra_button_text")}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

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
  mantra: {
    fontFamily: "norms-bold",
    color: "#fff",
    fontSize: 20,
  },
});
