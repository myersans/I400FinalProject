import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Character from "./components/Character.js";

const c = require("./AllCharacters.js");
let allCharacters = c.getAllCharacters();

export default function Favorites({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <Character
          cName={allCharacters[7].fullName}
          cImg={allCharacters[7].imageUrl}
        />
        <Character
          cName={allCharacters[13].fullName}
          cImg={allCharacters[13].imageUrl}
        />
        <Character
          cName={allCharacters[18].fullName}
          cImg={allCharacters[18].imageUrl}
        />
        <Character
          cName={allCharacters[31].fullName}
          cImg={allCharacters[31].imageUrl}
        />
        <Character
          cName={allCharacters[32].fullName}
          cImg={allCharacters[32].imageUrl}
        />
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
