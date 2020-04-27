import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SecurityImage } from "../../assets/images/SecurityImage";
import { Firebase } from "../firebase";

export const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const IMAGE_HEIGHT = 300;
  // const IMAGE_HEIGHT_SMALL = 200;

  const imageHeight = new Animated.Value(300);

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
    Keyboard.addListener("keyboardWillHide", _keyboardWillHide);
    return () => {
      Keyboard.removeListener("keyboardWillShow", _keyboardWillShow);
      Keyboard.removeListener("keyboardWillHide", _keyboardWillHide);
    };
  });

  const _keyboardWillShow = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: 200,
    }).start();
  };

  const _keyboardWillHide = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: 300,
    }).start();
  };

  const onLoginPress = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Main");
      })
      .catch(() => {});
  };

  const onSignUpPress = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Main");
      })
      .catch(() => {});
  };

  return (
    <View style={styles.center}>
      {/* needs refactoring */}
      <View style={styles.backArrow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="ios-arrow-back"
            color="rgba(255, 255, 255, 0.2)"
            size={35}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.center}>
          <View style={styles.regContent}>
            <Animated.View style={{ height: imageHeight }}>
              <SecurityImage imageWidth={250} />
            </Animated.View>
            <View style={styles.contentTextWrapper}>
              <Text style={styles.contentText}>
                To synchronize & protect your data, please{" "}
                <Text style={{ fontFamily: "norms-bold" }}>Register</Text> or{" "}
                <Text style={{ fontFamily: "norms-bold" }}>Sign In</Text> to an
                existing account.
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                onSubmitEditing={() => {
                  secondTextInput.focus();
                }}
                blurOnSubmit={false}
                value={email}
                label="Email"
                onChangeText={(email) => setEmail(email)}
                errorStyle={{ color: "red" }}
                placeholder="man@gmail.com"
                autoCorrect={false}
                textContentType="emailAddress"
                autoCapitalize="none"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                style={styles.input}
                placeholderTextColor="rgba(255, 255, 255, .5)"
              />
              <TextInput
                placeholderTextColor="rgba(255, 255, 255, .5)"
                ref={(input) => {
                  secondTextInput = input;
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                value={password}
                label="Password"
                onChangeText={(password) => setPassword(password)}
                errorStyle={{ color: "red" }}
                placeholder="••••••••••"
                secureTextEntry={true}
                autoCorrect={false}
                textContentType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="done"
                style={styles.input}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onLoginPress.bind(this)}
            >
              <View style={{ ...styles.wrapper, ...styles.logInBtn }}>
                <Text style={styles.logInBtnText}>Sign In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onSignUpPress.bind(this)}
            >
              <View style={{ ...styles.wrapper, ...styles.regBtn }}>
                <Text style={styles.regBtnText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  regContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  contentTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 300,
  },
  contentText: {
    fontFamily: "norms-regular",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  logInBtn: {
    height: 50,
    width: 180,
    backgroundColor: "white",
    borderRadius: 30,
  },
  logInBtnText: {
    fontFamily: "norms-bold",
    fontSize: 25,
  },
  regBtn: {
    height: 30,
    width: "100%",
  },
  regBtnText: {
    fontFamily: "norms-bold",
    color: "rgba(255, 255, 255, .4)",
    fontSize: 18,
  },
  backArrow: {
    position: "absolute",
    top: "7%",
    left: "5%",
  },
  inputContainer: {
    width: 300,
  },
  input: {
    color: "white",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, .25)",
    borderRadius: 30,
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 15,
    fontSize: 15,
  },
});
