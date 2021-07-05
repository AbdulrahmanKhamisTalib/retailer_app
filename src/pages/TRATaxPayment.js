import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function TRATaxPayment() {
  return (
    <Container>
      <Title>TRA Tax Payment FORM</Title>

      <View style={styles.form}>
        <Input placeholder="Employee Name" />
        <Input placeholder="Position" keyboardType="numeric" />
        <Input placeholder="Basic Salary" keyboardType="numeric" />
        <Input placeholder="ZSSF" keyboardType="numeric" />
        <Input placeholder="Gross Paye" keyboardType="numeric" />
        <Input placeholder="Paye" keyboardType="numeric" />
        <Input placeholder="SDL" keyboardType="numeric" />
        <Input placeholder="Total" keyboardType="numeric" />

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
