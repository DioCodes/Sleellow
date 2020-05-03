import React from "react";
import { TextInput, StyleSheet, Keyboard } from "react-native";

export const Input = ({
  label,
  value,
  placeholder,
  keybType,
  keyType,
  onChangeText,
  contentType,
  refer,
  onSubmit,
  secure,
}) => {
  return (
    <TextInput
      keyboardAppearance="dark"
      ref={refer}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      placeholderTextColor="rgba(255, 255, 255, .5)"
      label={label}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      autoCapitalize="none"
      TextContentType={contentType}
      keyboardType={keybType}
      returnKeyType={keyType}
      style={styles.input}
      secureTextEntry={secure}
    />
  );
};

const styles = StyleSheet.create({
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
