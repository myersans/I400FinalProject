import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./images/AppTitle.png")}
        style={{
          width: 350,
        }}
      />
      <Button
        title="Open Library"
        onPress={() => {
          navigation.navigate("MainLibrary");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374E8D",
    alignItems: "center",
    justifyContent: "center",
  },
});
