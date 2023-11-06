import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Character from "./components/Character.js";
import CharacterCard from "./components/CharacterCard.js";
import { useRoute } from "@react-navigation/native";

export default function CharacterInfo({ navigation }) {
  const route = useRoute();
  const cName = route.params.cName;
  const cImg = route.params.cImg;
  const cTitle = route.params.cTitle;
  const cFamily = route.params.cFamily;
  return (
    <View style={styles.container}>
      <CharacterCard
        cName={cName}
        cImg={cImg}
        cTitle={cTitle}
        cFamily={cFamily}
      />
    </View>
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
