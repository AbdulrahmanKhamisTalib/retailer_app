import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
} from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";
import colors from "../config/colors";

function Grid({ children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      {children}
    </View>
  );
}

function Card({ children, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: colors.white,
          height: 160,
          flex: 1,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </TouchableNativeFeedback>
  );
}

export default function Home({ navigation }) {
  return (
    <Container>
      <View style={{ height: 100 }} />
      <Title>RETAILER MANAGEMENT SYSTEM</Title>
      <View style={{ height: 100 }} />

      <Grid>
        <Card onPress={() => navigation.navigate("zrbPayment")}>
          <Image
            source={require("../../assets/zrb.jpg")}
            resizeMode="center"
            style={{ width: "40%" }}
          />
          {/* <Text>ZRB</Text> */}
        </Card>
        <Card onPress={() => navigation.navigate("traPayment")}>
          <Image
            source={require("../../assets/tra.jpg")}
            resizeMode="center"
            style={{ width: "80%" }}
          />
          {/* <Text>TRA</Text> */}
        </Card>
      </Grid>

      <Grid>
        <Card onPress={() => navigation.navigate("zssfPayment")}>
          <Image
            source={require("../../assets/zssf.jpg")}
            resizeMode="center"
            style={{ width: "60%" }}
          />
          {/* <Text>ZSSF</Text> */}
        </Card>
        <Card onPress={() => navigation.navigate("zmcPayment")}>
          <Image
            source={require("../../assets/zmc.png")}
            resizeMode="center"
            style={{ width: "65%" }}
          />
          {/* <Text>ZMC</Text> */}
        </Card>
      </Grid>
    </Container>
  );
}

const styles = StyleSheet.create({});
