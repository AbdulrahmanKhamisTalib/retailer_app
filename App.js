import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "./src/config/colors";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import ZRBTaxPayment from "./src/pages/ZRBTaxPayment";
import TRATaxPayment from "./src/pages/TRATaxPayment";
import ZSSFTaxPayment from "./src/pages/ZSSFTaxPayment";
import ZMCTaxPayment from "./src/pages/ZMCTaxPayment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            animationEnabled: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.light,
          }}
        >
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="zrbPayment"
            component={ZRBTaxPayment}
            options={{ title: "ZRB" }}
          />
          <Stack.Screen
            name="traPayment"
            component={TRATaxPayment}
            options={{ title: "TRA" }}
          />
          <Stack.Screen
            name="zssfPayment"
            component={ZSSFTaxPayment}
            options={{ title: "ZSSF" }}
          />
          <Stack.Screen
            name="zmcPayment"
            component={ZMCTaxPayment}
            options={{ title: "ZMC" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
