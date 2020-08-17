import React, {useState, useRef} from "react"
import {View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions, Picker} from 'react-native'
import * as Permissions from "expo-permissions";
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from "moment";

import theme from "../../theme"
import { Container } from "../../components/Container";

export const SettingsNotifications = () => {
  const [date, setDate] = useState(new Date(1598051730000));
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

    console.log(moment(currentDate).hours(), moment(currentDate).minutes())
    console.log(moment(dateMinus30Minutes).hours(), moment(dateMinus30Minutes).minutes())
    console.log(moment(dateMinusHour).hours(), moment(dateMinusHour).minutes())

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

  const sheduledNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true
      }
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: {
        hour: secHours,
        minute: secMinutes,
        repeats: true
      }
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
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
    sheduledNotification()
  }

  return (
    <View>
      <Container name="Prepare for sleep" onPress={() => bs.current.open()} />

      {/* Сделать отдельным компонентом */}
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
            container: {
              backgroundColor: theme.MODAL_BGC_COLOR,
              backgroundColor: theme.PRIMARY_COLOR,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
          }}
          animationType="fade"
        >
          <View style={styles.top}>
              <Text style={styles.topHeader}>Prepare for sleep</Text>
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

          <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={onSavePress}>
            <View style={styles.saveBtnContainer}>
              <Text style={styles.saveBtn}>Save</Text>
            </View>
          </TouchableOpacity>
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
    marginBottom: 5
  },
  modalHeader: {
    color: theme.SECONDARY_COLOR,
    fontSize: 18,
    fontFamily: 'norms-regular',
  },
  saveBtnContainer: {
    width: '50%',
    height: 50,
    // backgroundColor: theme.TERTIARY_COLOR,
    backgroundColor: "rgba(255, 255, 255, .1)",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10
  },
  saveBtn: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "norms-medium",

  }
})