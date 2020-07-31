import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert, AsyncStorage } from "react-native";
import { useSelector } from "react-redux";
import ConfettiCannon from 'react-native-confetti-cannon';

import { UserLevel } from "./UserLevel";
import { ShowScreenRide } from "../../components/ShowScreenRide";
import { useFocusEffect } from "@react-navigation/native";


export const ProfileScreen = ({navigation}) => {
  const [showConfetti, setShowConfetti] = useState(false)

  const level = useSelector((state) => state.level.level)
  const confetti = useRef()
  const confettiColors = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, .5)",
  "rgba(255,255,255, .1)"]
  
  let levelUpConfetti = async () => {
     let value = await AsyncStorage.getItem("@ShootConfetti:key");
     try {
        if (value == "true") {
          confetti.current.start();
          Alert.alert("Congratulations! 🎉", `You have reached level ${level}!`,
          [{
            onPress: async () => {
              await AsyncStorage.setItem("@ShootConfetti:key", "false");
              console.log(await AsyncStorage.getItem("@ShootConfetti:key"))
            }
          }]
          );
        }
     } catch (err) {
       console.log(err);
     }
   };
  
  useFocusEffect(() => {
    levelUpConfetti();
  }, [navigation])

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //   });
  //   return unsubscribe;
  // }, [navigation])

  return (
    <ShowScreenRide>
      <View style={styles.main}>

      <View style={styles.top}>
        <View style={styles.levelContainer}>
          <UserLevel />
        </View>

      </View>
          <ConfettiCannon ref={(ref) => confetti.current = ref} autoStart={false} 
          colors={confettiColors} fadeOut fallSpeed={4000} 
          count={200}  origin={{ x: -20, y: 0 }} />
      </View>
    </ShowScreenRide>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontFamily: "norms-bold",
    fontSize: 30,
    position: 'absolute',
  },
  main: {
    paddingTop: windowHeight > 800 ? "10%" : "5%",
    flex: 1,
    width: '100%',
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  levelContainer: {
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20
  }
});
