import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, AsyncStorage, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import ConfettiCannon from 'react-native-confetti-cannon';
import * as Linking from 'expo-linking';

import { ShowScreenRide } from "../../components/ShowScreenRide";
import { UserLevel } from "./UserLevel";
import { UserIcon } from "../../../assets/images/UserIcon";
import theme from "../../theme";
import { Premium } from "./Premium";
import { Container } from "../../components/Container";
import { ShareTheApp } from "../../components/ShareTheApp";
import { PrepareForSleep } from "../../components/PrepareForSleep";
import { WriteReview } from "../../components/WriteReview";


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
              {/* Добавить уровень когда будет добавлена авторизация */}
              {/* <UserLevel /> */}
              <UserIcon/>
            <Premium/>
          </View>

          <View style={styles.middle}>
            <View style={styles.settingsContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Settings</Text>
              </View>
              <PrepareForSleep />
              <WriteReview />
              <ShareTheApp />
              <Container name="Find me on Instagram" icon="👨🏻‍💻" onPress={() => Linking.openURL("instagram://user?username=dio.codes")} />
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
    flex: 1,
    width: '100%',
    paddingTop: windowHeight > 800 ? "15%" : "10%",
    paddingHorizontal: 20,
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
  },
  settingsContainer: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    width: "100%",
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.HEADER,
    fontFamily: 'norms-bold',
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
