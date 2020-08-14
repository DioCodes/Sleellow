import React, {useState} from "react"
import {View, Text, TouchableOpacity, StyleSheet, Switch,} from 'react-native'

import theme from "../../theme"

export const SettingsNotifications = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <Switch
        trackColor={{ false: "#767577", true: "rgba(255,255,255,.25)" }}
        thumbColor={isEnabled ? theme.SECONDARY_COLOR : "rgba(255,255,255,.5)"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    // backgroundColor: '#f4f3f4',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: 'norms-regular'
  }
})