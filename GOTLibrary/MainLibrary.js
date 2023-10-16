import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Character from "./components/Character.js";
import CharacterCard from "./components/CharacterCard.js";

characterList = [
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
  <Character />,
];

export default function MainLibrary() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          width: 400,
          height: 100,
          backgroundColor: "pink",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 20,
          padding: 5,
          margnBottom: 5,
          marginTop: 10,
        }}
      >
        <Text>Search Bar</Text>
        <Text>Filter</Text>
      </View>
      <ScrollView
        style={{
          width: 400,
          height: 400,
        }}
      >
        {characterList}
      </ScrollView>
      {/* <CharacterCard /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B2B73",
    alignItems: "center",
    justifyContent: "center",
  },
});
