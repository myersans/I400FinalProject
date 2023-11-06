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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            color: "gray",
          }}
        >
          Encyclopedia
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: "silver",
          }}
        >
          Of
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: "white",
          }}
        >
          Thrones
        </Text>
      </View>

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
