import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import colors from "../config/colors";

export default function Button({ title, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    color: colors.light,
    fontSize: 17,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});
