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

export default function Starks({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[2].fullName,
              cImg: allCharacters[2].imageUrl,
              cTitle: allCharacters[2].title,
              cFamily: allCharacters[2].family,
            });
          }}
        >
          <Character
            cName={allCharacters[2].fullName}
            cImg={allCharacters[2].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[3].fullName,
              cImg: allCharacters[3].imageUrl,
              cTitle: allCharacters[3].title,
              cFamily: allCharacters[3].family,
            });
          }}
        >
          <Character
            cName={allCharacters[3].fullName}
            cImg={allCharacters[3].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[4].fullName,
              cImg: allCharacters[4].imageUrl,
              cTitle: allCharacters[4].title,
              cFamily: allCharacters[4].family,
            });
          }}
        >
          <Character
            cName={allCharacters[4].fullName}
            cImg={allCharacters[4].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[5].fullName,
              cImg: allCharacters[5].imageUrl,
              cTitle: allCharacters[5].title,
              cFamily: allCharacters[5].family,
            });
          }}
        >
          <Character
            cName={allCharacters[5].fullName}
            cImg={allCharacters[5].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[6].fullName,
              cImg: allCharacters[6].imageUrl,
              cTitle: allCharacters[6].title,
              cFamily: allCharacters[6].family,
            });
          }}
        >
          <Character
            cName={allCharacters[6].fullName}
            cImg={allCharacters[6].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[10].fullName,
              cImg: allCharacters[10].imageUrl,
              cTitle: allCharacters[10].title,
              cFamily: allCharacters[10].family,
            });
          }}
        >
          <Character
            cName={allCharacters[10].fullName}
            cImg={allCharacters[10].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[11].fullName,
              cImg: allCharacters[11].imageUrl,
              cTitle: allCharacters[11].title,
              cFamily: allCharacters[11].family,
            });
          }}
        >
          <Character
            cName={allCharacters[11].fullName}
            cImg={allCharacters[11].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[27].fullName,
              cImg: allCharacters[27].imageUrl,
              cTitle: allCharacters[27].title,
              cFamily: allCharacters[27].family,
            });
          }}
        >
          <Character
            cName={allCharacters[27].fullName}
            cImg={allCharacters[27].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[36].fullName,
              cImg: allCharacters[36].imageUrl,
              cTitle: allCharacters[36].title,
              cFamily: allCharacters[36].family,
            });
          }}
        >
          <Character
            cName={allCharacters[36].fullName}
            cImg={allCharacters[36].imageUrl}
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
