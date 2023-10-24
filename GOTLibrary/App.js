import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainLibrary from "./MainLibrary.js";
import Home from "./Home.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainLibrary" component={MainLibrary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
