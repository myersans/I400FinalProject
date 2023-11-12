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

export default function Lannisters({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[8].fullName,
              cImg: allCharacters[8].imageUrl,
              cTitle: allCharacters[8].title,
              cFamily: allCharacters[8].family,
            });
          }}
        >
          <Character
            cName={allCharacters[8].fullName}
            cImg={allCharacters[8].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[9].fullName,
              cImg: allCharacters[9].imageUrl,
              cTitle: allCharacters[9].title,
              cFamily: allCharacters[9].family,
            });
          }}
        >
          <Character
            cName={allCharacters[9].fullName}
            cImg={allCharacters[9].imageUrl}
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
              cName: allCharacters[14].fullName,
              cImg: allCharacters[14].imageUrl,
              cTitle: allCharacters[14].title,
              cFamily: allCharacters[14].family,
            });
          }}
        >
          <Character
            cName={allCharacters[14].fullName}
            cImg={allCharacters[14].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[42].fullName,
              cImg: allCharacters[42].imageUrl,
              cTitle: allCharacters[42].title,
              cFamily: allCharacters[42].family,
            });
          }}
        >
          <Character
            cName={allCharacters[42].fullName}
            cImg={allCharacters[42].imageUrl}
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
