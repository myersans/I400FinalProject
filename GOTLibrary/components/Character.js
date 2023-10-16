import { View, Image, Text } from "react-native";

export default function Character() {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        border: "white",
        padding: 20,
        margin: 5,
      }}
    >
      <Image
        source={require("../placeholder.jpg")}
        style={{ width: 150, height: 100, marginRight: 15 }}
      />
      <Text
        style={{
          textAlign: "center",
          marginLeft: 20,
        }}
      >
        Character Name
      </Text>
    </View>
  );
}
