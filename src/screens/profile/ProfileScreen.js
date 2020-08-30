import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, AsyncStorage, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import ConfettiCannon from 'react-native-confetti-cannon';
import * as Linking from 'expo-linking';

import { ShowScreenRide } from "../../components/ShowScreenRide";
import { UserLevel } from "../../components/UserLevel";
import { UserIcon } from "../../../assets/images/UserIcon";
import theme from "../../theme";
import { PremiumButton } from "../../components/PremiumButton";
import { Container } from "../../components/Container";
import { ShareTheApp } from "../../components/ShareTheApp";
// import { PrepareForSleep } from "../PrepareForSleep";
import { WriteReview } from "../../components/WriteReview";
import { Ionicons } from "@expo/vector-icons";
import { Leaves } from "../../../assets/images/Leaves";
import { t } from "../../../assets/lang";


export const ProfileScreen = ({navigation}) => {
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
            <Leaves height={175} width={175}/>
            <View style={styles.userPos}>
              <UserIcon/>
            </View>
            {/* <Text style={styles.thanks}>{t("thanks_for_your_support")} <Ionicons name="ios-heart" size={18} color="white" /></Text> */}
            <PremiumButton navigation={navigation} />
          </View>

          <View style={styles.middle}>
            <View style={styles.settingsContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>{t("settings_C")}</Text>
              </View>
              <Container icon={<Ionicons name="ios-moon" size={30} color="white" />}  name={t("prepare_for_sleep")} onPress={() => navigation.push("PrepareForSleepModal")} />
              <WriteReview />
              <ShareTheApp />
              <Container 
                name={t("dev_insta")} 
                icon={
                  <Ionicons name="logo-instagram" size={30} color="white" />
                } 
                onPress={
                  () => Linking.openURL("instagram://user?username=dio.codes")
                }
              />
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
    paddingTop: windowHeight > 800 ? "2%" : "3%",
    paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  top: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  userPos: {
    position: 'absolute',
    top: 25
  },
  thanks: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'norms-medium',
    position: 'absolute',
    bottom: 0
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
  you: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'norms-bold',
    marginLeft: 5,
    // position: 'absolute',
    // bottom: 0
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
