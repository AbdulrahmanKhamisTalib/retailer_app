import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 30,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.dark,
  },
});
