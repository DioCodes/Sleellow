import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { SecurityImage } from "../../../assets/images/SecurityImage";
import { BackArrow } from "../../components/BackArrow";
import { Input } from "../../components/Input";
import { signIn, registerUser } from "../../store/actions/syncActions";
import firebase from "firebase";

const AuthScreen = ({ navigation, signIn, registerUser, syncError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const windowHeight = Dimensions.get("window").height;
  const imageHeight = useRef(new Animated.Value(windowHeight > 800 ? 300 : 250))
    .current;
  const showError = useRef(new Animated.Value(0)).current;
  const showErrorText = useRef(new Animated.Value(0)).current;

  let IMAGE_HEIGHT = windowHeight > 800 ? 300 : 250;
  let IMAGE_HEIGHT_SMALL =
    windowHeight > 890 ? 250 : windowHeight > 800 ? 225 : 225;

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
    Keyboard.addListener("keyboardWillHide", _keyboardWillHide);
    watchAuthState();
    // contentAnim();

    return () => {
      Keyboard.removeListener("keyboardWillShow", _keyboardWillShow);
      Keyboard.removeListener("keyboardWillHide", _keyboardWillHide);
    };
  });

  const watchAuthState = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Main");
      }
    });
  };

  const _keyboardWillShow = () => {
    Animated.timing(imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  const _keyboardWillHide = () => {
    Animated.timing(imageHeight, {
      duration: 300,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  const contentAnim = () => {
    Animated.parallel([
      Animated.timing(showError, {
        duration: 400,
        toValue: 20,
      }),
      Animated.timing(showErrorText, {
        duration: 1500,
        toValue: 1,
      }),
    ]).start();
  };

  const onLoginPress = (e) => {
    e.preventDefault();
    signIn({ email, password });
    contentAnim();
  };

  const onSignUpPress = (e) => {
    e.preventDefault();
    registerUser({ email, password });
    contentAnim();
  };

  return (
    <View style={styles.center}>
      {/* needs refactoring */}

      <BackArrow nav={navigation} />

      <KeyboardAvoidingView style={{ ...styles.container }} behavior="padding">
        <View style={{ ...styles.regContent }}>
          <SecurityImage imageWidth={300} imageHeight={imageHeight} />
          <View style={styles.contentTextWrapper}>
            <Text style={styles.contentText}>
              To synchronize & protect your data, please{" "}
              <Text style={{ fontFamily: "norms-bold" }}>Register</Text> or{" "}
              <Text style={{ fontFamily: "norms-bold" }}>Sign In</Text> to an
              existing account.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              onSubmit={() => {
                secondTextInput.focus();
              }}
              label="Email"
              value={email}
              placeholder="yourEmail@gmail.com"
              keybType="email-address"
              keyType="next"
              onChangeText={(email) => setEmail(email)}
              contentType="emailAddress"
            />
            <Input
              refer={(input) => {
                secondTextInput = input;
              }}
              onSubmit={() => {
                Keyboard.dismiss();
              }}
              label="Password"
              value={password}
              placeholder="••••••••••"
              keyType="done"
              onChangeText={(password) => setPassword(password)}
              contentType="password"
              secure={true}
            />
          </View>
          <Animated.View
            style={{
              opacity: showErrorText,
              height: showError,
              marginVertical: 5,
            }}
          >
            {/* needs refactoring for logIn and register !!! */}
            {syncError ? (
              <Text
                style={{
                  color: "white",
                  fontFamily: "norms-bold",
                }}
              >
                {syncError}
              </Text>
            ) : (
              <ActivityIndicator size={40} />
            )}
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onLoginPress.bind(this)}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    maxHeight: Dimensions.get("window").height > 800 ? "60%" : "65%",
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
    // height: 10,
    // backgroundColor: "red",
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
  inputContainer: {
    width: 300,
  },
});

const mapSateToProps = (state) => {
  return {
    syncError: state.sync.syncError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    registerUser: (creds) => dispatch(registerUser(creds)),
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(AuthScreen);
