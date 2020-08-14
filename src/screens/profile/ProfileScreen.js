import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, AsyncStorage, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import ConfettiCannon from 'react-native-confetti-cannon';

import { ShowScreenRide } from "../../components/ShowScreenRide";
import { UserLevel } from "./UserLevel";
import { SettingsNotifications } from "./SettingsNotifications";
import theme from "../../theme";
import { Premium } from "./Premium";


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

  return (
    <ShowScreenRide>
      <ScrollView>
        <View style={styles.main}>

          <View style={styles.top}>
            <View style={styles.levelContainer}>
              <UserLevel />
            </View>
            <Premium/>
          </View>

          <View style={styles.middle}>
            <View style={styles.settingsContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Settings</Text>
              </View>
              <SettingsNotifications/>
            </View>
          </View>

            <ConfettiCannon ref={(ref) => confetti.current = ref} autoStart={false} 
            colors={confettiColors} fadeOut fallSpeed={4000} 
            count={200}  origin={{ x: -20, y: 0 }} />
        </View>
      </ScrollView>
    </ShowScreenRide>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
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
  middle: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
    paddingTop: 10,
    paddingHorizontal: 20
  },
  settingsContainer: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    width: "100%",
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.HEADER,
    fontFamily: 'norms-bold',
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
