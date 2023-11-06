import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainLibrary from "./MainLibrary.js";
import Home from "./Home.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Starks from "./Starks.js";
import Baratheons from "./Baratheons.js";
import Lannisters from "./Lannisters.js";
import CharacterInfo from "./CharacterInfo.js";
import Favorites from "./Favorites.js";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainLibrary" component={MainLibrary} />
        <Stack.Screen name="Starks" component={Starks} />
        <Stack.Screen name="Baratheons" component={Baratheons} />
        <Stack.Screen name="Lannisters" component={Lannisters} />
        <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
