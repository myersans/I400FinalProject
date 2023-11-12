import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

let favList = [];

export default function Character({ cName, cImg }) {
  const [isFavorite, setIsFavorite] = useState(false);

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
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
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
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => {
              setIsFavorite(!isFavorite);
              if (!isFavorite) {
                favList.push(cName);
                console.log(favList);
              } else if (isFavorite) {
                favList.splice(favList.indexOf(cName), 1);
                console.log(favList);
              }
            }}
          >
            <AntDesign
              name="star"
              size={35}
              color={isFavorite ? "gold" : "black"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// function getFavList() {
//   return favList;
// }

// module.exports = {
//   getFavList: getFavList,
// };
