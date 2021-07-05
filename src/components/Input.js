import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, ...otherProps }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      autoCorrect={false}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#cccccc",
    height: 50,
    fontSize: 17,
    paddingTop: 15,
    marginBottom: 20,
  },
});
