import React from "react";
import { StyleSheet, ScrollView } from "react-native";

export default function Container({ children }) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
