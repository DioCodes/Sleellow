import React, {useState, useRef} from "react"
import {View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions, Picker} from 'react-native'
import * as Permissions from "expo-permissions";
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from "moment";

import theme from "../theme"
import { Container } from "./Container";

export const PrepareForSleep = () => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [secHours, setSecHours] = useState()
  const [secMinutes, setSecMinutes] = useState()
  const [thirdHours, setThirdHours] = useState()
  const [thirdMinutes, setThirdMinutes] = useState()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const dateMinusHour = moment(currentDate).subtract(1, "hours")
    const dateMinus30Minutes = moment(currentDate).subtract(30, "minutes");

    setDate(currentDate);
    setHours(moment(currentDate).hours())
    setMinutes(moment(currentDate).minutes())
    setSecHours(moment(dateMinus30Minutes).hours())
    setSecMinutes(moment(dateMinus30Minutes).minutes())
    setThirdHours(moment(dateMinusHour).hours())
    setThirdMinutes(moment(dateMinusHour).minutes())
  };

  const isAllowNotifications = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }
  };


  const bs = useRef();
  const windowHeight = Dimensions.get("window").height;

  const scheduledNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });



    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Prepare for sleep.',
        body: "Go to sleep right now!",
        sound: 'default'
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true
      }
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Prepare for sleep.',
        body: "It's time to start your bedtime routine!",
        sound: 'default'
      },
      trigger: {
        hour: secHours,
        minute: secMinutes,
        repeats: true
      }
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Prepare for sleep.',
        body: "Finish all your tasks and get ready for sleep.",
        sound: 'default'
      },
      trigger: {
        hour: thirdHours,
        minute: thirdMinutes,
        repeats: true
      }
    });
    
  }

  const onSavePress = () => {
    bs.current.close()
    isAllowNotifications()
    scheduledNotification()
  }

  return (
    <View>
      <Container icon="😴"  name="Prepare for sleep" onPress={() => bs.current.open()} />

      <RBSheet
          ref={bs}
          height={windowHeight > 800 ? 735 : 675}
          openDuration={275}
          closeDuration={275}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "#rgba(0, 0, 0, 0.85)",
              // marginHorizontal: 100
            },
            draggableIcon: {
              display: 'none'
            },
            container: {
              backgroundColor: theme.MODAL_BGC_COLOR,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
          }}
          animationType="fade"
        >
          <View style={styles.top}>
              <Text style={styles.topHeader}>Prepare for sleep 😴</Text>
          </View>
          
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Choose the time you want to fall asleep</Text>
          </View>

          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            minuteInterval={5}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />

          <View style={styles.modalContainer}>
            <Text style={{ ...styles.modalHeader, opacity: .25, fontSize: 14}}>Sleellow will remind you to get ready for bed at your chosen time, 30 minutes and 1 hour before it.</Text>
          </View>

          <View style={styles.saveBtnContainer}>
            <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => onSavePress()}>
              <View style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    width: "100%",
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  top: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // backgroundColor: "rgba(255, 255, 255, .1)",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, .05)',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  topHeader: {
    fontSize: 18,
    color: theme.SECONDARY_COLOR,
    fontFamily: 'norms-bold',
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: theme.CONTAINER_FONT_FAMILY
  },
  icon: {
    fontSize: 26
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 20
  },
  modalHeader: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: 'norms-regular',
    opacity: 1
  },
  saveBtnContainer: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20
  },
  saveBtn: {
    width: '100%',
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .1)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "norms-medium",
  }
})