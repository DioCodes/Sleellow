import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import theme from "../theme";
import RenderParticles from "../components/Particles/RenderParticles";
import { TouchableOpacity } from "react-native-gesture-handler";

const NapScreen = ({ navigation }) => {
  const [stopAnim, setStopAnim] = useState(false);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const backHandler = () => {
    setStopAnim(stopAnim ? false : true);

    setTimeout(() => navigation.goBack(), 2000);
  };

  return (
    <View style={{ ...styles.container }}>
      {/* <RenderParticles
        backgroundColor={theme.PRIMARY_COLOR}
        particleSize={30}
        stopAnim={stopAnim}
      /> */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>4:35 AM</Text>
        <TouchableOpacity
          onPress={() => backHandler()}
          activeOpacity={0.5}
          style={styles.backContainer}
        >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent",
  },
  text: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 60,
    fontFamily: "norms-medium",
  },
  backContainer: {
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: "#fff",
    backgroundColor: "white",
    width: 125,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    color: "black",
    fontSize: 30,
    fontFamily: "norms-medium",
  },
});

export default NapScreen;
