import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ZRBTaxPayment() {
  return (
    <Container>
      <Title>ZRB Tax Payment FORM</Title>

      <View style={styles.form}>
        <Input placeholder="Date" />
        <Input placeholder="Receipts No." keyboardType="numeric" />
        <Input placeholder="Bill/Invoice No." keyboardType="numeric" />
        <Input placeholder="Amount of cash sales" keyboardType="numeric" />
        <Input
          placeholder="Amount of credit Bills/Sales/Invoice"
          keyboardType="numeric"
        />
        <Input
          placeholder="Total amount of sales/Turn over"
          keyboardType="numeric"
        />
        <Input placeholder="TOTAL AMOUNT TO PAY" keyboardType="numeric" />

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
