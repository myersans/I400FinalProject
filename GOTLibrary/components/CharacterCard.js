import { View, Image, Text } from "react-native";
import Character from "./Character.js";

export default function CharacterCard({ cName, cImg, cTitle, cFamily }) {
  return (
    <View
      style={{
        backgroundColor: "pink",
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Character Name
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Below is the image of the character and their house logo</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../images/placeholder.jpg")}
            style={{ width: 150, height: 150 }}
          />
          <Image
            source={require("../images/housePlaceholder.jpg")}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Title:</Text>
        <Text>Title goes here</Text>
        <Text>Family:</Text>
        <Text>House name goes here</Text>
        <Text>Bio:</Text>
        <Text>Brief bio goes here</Text>
      </View>
    </View>
  );
}
