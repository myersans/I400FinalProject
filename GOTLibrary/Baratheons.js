import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Pressable,
} from "react-native";
import Character from "./components/Character.js";

const c = require("./AllCharacters.js");
let allCharacters = c.getAllCharacters();

export default function Baratheons({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[7].fullName,
              cImg: allCharacters[7].imageUrl,
              cTitle: allCharacters[7].title,
              cFamily: allCharacters[7].family,
            });
          }}
        >
          <Character
            cName={allCharacters[7].fullName}
            cImg={allCharacters[7].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[13].fullName,
              cImg: allCharacters[13].imageUrl,
              cTitle: allCharacters[13].title,
              cFamily: allCharacters[13].family,
            });
          }}
        >
          <Character
            cName={allCharacters[13].fullName}
            cImg={allCharacters[13].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[18].fullName,
              cImg: allCharacters[18].imageUrl,
              cTitle: allCharacters[18].title,
              cFamily: allCharacters[18].family,
            });
          }}
        >
          <Character
            cName={allCharacters[18].fullName}
            cImg={allCharacters[18].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[31].fullName,
              cImg: allCharacters[31].imageUrl,
              cTitle: allCharacters[31].title,
              cFamily: allCharacters[31].family,
            });
          }}
        >
          <Character
            cName={allCharacters[31].fullName}
            cImg={allCharacters[31].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[32].fullName,
              cImg: allCharacters[32].imageUrl,
              cTitle: allCharacters[32].title,
              cFamily: allCharacters[32].family,
            });
          }}
        >
          <Character
            cName={allCharacters[32].fullName}
            cImg={allCharacters[32].imageUrl}
          />
        </Pressable>
      </ScrollView>
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
