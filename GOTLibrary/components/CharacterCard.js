import { View, Image, Text } from "react-native";
import Character from "./Character.js";

export default function CharacterCard({ cName, cImg, cTitle, cFamily }) {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: "white",
        width: 350,
        height: 475,
      }}
    >
      <View
        style={{
          borderRadius: 20,
          borderWidth: 5,
          borderColor: "white",
          backgroundColor: "#3B2B73",
          padding: 3,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "white",
          }}
        >
          {cName}
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image source={{ uri: cImg }} style={{ width: 250, height: 250 }} />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          borderWidth: 5,
          borderColor: "white",
          backgroundColor: "#3B2B73",
          padding: 3,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Title:
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "white",
          }}
        >
          {cTitle}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Family:
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "white",
          }}
        >
          {cFamily}
        </Text>
      </View>
    </View>
  );
}
