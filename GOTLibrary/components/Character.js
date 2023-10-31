import { View, Image, Text } from "react-native";

export default function Character({ cName, cImg }) {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 5,
        padding: 20,
        margin: 5,
      }}
    >
      <Image
        source={{ uri: cImg }}
        style={{
          width: 150,
          height: 100,
          marginRight: 15,
          borderColor: "black",
          borderWidth: 2,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginLeft: 20,
          color: "white",
          padding: 5,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 20,
          backgroundColor: "#3B2B73",
        }}
      >
        {cName}
      </Text>
    </View>
  );
}
