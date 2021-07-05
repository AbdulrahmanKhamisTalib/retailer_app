import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Container from "../components/Container";

function Login({ navigation }) {
  return (
    <Container>
      <View style={{ height: 150 }} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.tag}>
        Use your username and pasword to login into your account
      </Text>

      <Input placeholder="Username" autoCapitalize="none" />
      <Input placeholder="Password" secureTextEntry />

      <View style={{ height: 30 }} />
      <Button title="Login" onPress={() => navigation.navigate("home")} />
    </Container>
  );
}

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  tag: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 70,
    marginTop: 13,
    width: "90%",
    alignSelf: "center",
  },
});
