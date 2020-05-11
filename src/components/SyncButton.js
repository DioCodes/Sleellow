import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { NotInSyncIcon } from "../../assets/images/NotInSyncIcon";
import { InSyncIcon } from "../../assets/images/InSyncIcon";
import { connect } from "react-redux";
import { signOut } from "../store/actions/syncActions";

const SyncButton = ({ navigation, sync, signOut }) => {
  return sync.uid ? (
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
};

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

export default connect(mapStateToProps, mapDispatchToProps)(SyncButton);
