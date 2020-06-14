import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { connect } from "react-redux";

const TimerButton = ({ name, onPress, color }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          ...styles.timerBtnContainer,
          backgroundColor: color,
        }}
      >
        <Text style={styles.timerBtnText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  timerBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,

    borderRadius: 5,
    paddingVertical: 15,
    width: 200,
  },
  timerBtnText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: "norms-medium",
  },
});

const mapStateToProps = (state) => {
  const { mins } = state;
  return { mins };
};

export default connect(mapStateToProps)(TimerButton);
