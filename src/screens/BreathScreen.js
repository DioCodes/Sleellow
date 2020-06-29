import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { translate } from "i18n-js";

import theme from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BreathAnimation } from "../components/BreathAnimation";
import { StyledButton } from "../components/StyledButton";

const BreathScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Breath",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Breath Info"
            iconName="md-information-circle-outline"
            onPress={() => {
              navigation.navigate("BreathScreenInfo");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const [paused, setPaused] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.breathAnimation}>
        <BreathAnimation paused={paused} />
      </View>
      <StyledButton
        onPress={() => {
          paused ? setPaused(false) : setPaused(true);
        }}
        name={paused ? "Start" : "Stop"}
        borderColor={theme.SECONDARY_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR,
  },
  breathAnimation: {
    marginTop: 10,
    height: 300,
    width: "100%",
    marginBottom: 30,
  },
});

export default BreathScreen;
