import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ZSSFTaxPayment() {
  return (
    <Container>
      <Title>ZSSF Tax Payment FORM</Title>

      <View style={styles.form}>
        <Input placeholder="Id.No." keyboardType="numeric" />
        <Input placeholder="Name" keyboardType="name" />
        <Input placeholder="Salary" keyboardType="numeric" />
        <Input placeholder="7%" keyboardType="numeric" />
        <Input placeholder="13%" keyboardType="numeric" />
        <Input placeholder="13%" keyboardType="numeric" />
        <Input placeholder="20%" keyboardType="numeric" />
        <Input placeholder="Total " keyboardType="numeric" />
        <Input placeholder="Previous" keyboardType="numeric" />
        <Input placeholder="Current" keyboardType="numeric" />
        <Input placeholder="Variency" keyboardType="numeric" />

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
