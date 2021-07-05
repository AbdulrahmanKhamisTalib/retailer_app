import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ZMCTaxPayment() {
  return (
    <Container>
      <Title>ZMC Tax Payment FORM</Title>

      <View style={styles.form}>
        <Input placeholder="Date" />
        <Input placeholder="Month" keyboardType="name" />
        <Input placeholder="Type of payment" keyboardType="numeric" />
        <Input placeholder="Mode of Payment" keyboardType="numeric" />
        <Input placeholder="Amount" keyboardType="numeric" />

        <Button title="submit" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
});
