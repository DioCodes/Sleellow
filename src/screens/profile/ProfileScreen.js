import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { NotInSyncIcon } from "../../../assets/images/NotInSyncIcon";
import { InSyncIcon } from "../../../assets/images/InSyncIcon";
import { UserLevel } from "./UserLevel";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/syncActions";

const ProfileScreen = ({ navigation, sync, signOut }) => {
  const SyncButton = sync.uid ? (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        Alert.alert(
          "Are you sure you want to disable synchronization?",
          "",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {},
            },
            {
              text: "Yes",
              onPress: () => signOut(),
            },
          ],
          { cancelable: false }
        );
      }}
    >
      <InSyncIcon iconWidth={35} iconHeight={20} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Auth");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    >
      <NotInSyncIcon iconWidth={35} iconHeight={20} />
    </TouchableOpacity>
  );

  // console.log(props);
  return (
    <View style={styles.center}>
      <View style={styles.top}>
        <UserLevel />

        <View style={styles.topButtons}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <View style={styles.premium}>
              <Text style={{ ...styles.premiumText }}>
                try premium for free
              </Text>
            </View>
          </TouchableOpacity>

          {SyncButton}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "15%",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },

  premium: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  premiumText: {
    color: "#fff",
    fontFamily: "norms-medium",
    fontSize: 15,
  },
  topButtons: {
    height: 100,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    sync: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
