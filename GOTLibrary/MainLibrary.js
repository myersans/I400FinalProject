import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import Character from "./components/Character.js";
import CharacterCard from "./components/CharacterCard.js";
import { all } from "axios";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

const c = require("./AllCharacters.js");
let allCharacters = c.getAllCharacters();

// async function getResponse() {
//   const response = await fetch(
//     "https://game-of-thrones1.p.rapidapi.com/Characters",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "game-of-thrones1.p.rapidapi.com",
//         "x-rapidapi-key": "1ad6a74ebemsh779b8e1b167a1a3p19d314jsn30f21d8f9ecf",
//       },
//     }
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

export default function MainLibrary({ navigation }) {
  const [selected, setSelected] = useState("");
  const options = [
    { key: 1, value: "Starks" },
    { key: 2, value: "Baratheons" },
    { key: 3, value: "Lannisters" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          width: 400,
          height: 150,
          backgroundColor: "skyblue",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          borderRadius: 20,
          margnBottom: 5,
          marginTop: 10,
          borderWidth: 5,
          borderColor: "white",
          marginBottom: 5,
          padding: 10,
        }}
      >
        <SelectList
          boxStyles={{
            borderWidth: 3,
            borderColor: "black",
            marginTop: 5,
          }}
          dropdownStyles={{
            borderWidth: 3,
            borderColor: "white",
            backgroundColor: "#3B2B73",
            marginBottom: 10,
            height: 80,
          }}
          dropdownItemStyles={{
            borderWidth: 1,
            borderColor: "white",
            height: 35,
          }}
          dropdownTextStyles={{ color: "white", fontSize: 15 }}
          setSelected={(val) => setSelected(val)}
          onSelect={() => navigation.navigate(selected)}
          data={options}
          save="value"
          placeholder="Filter Options"
          maxHeight={150}
        ></SelectList>
      </View>
      <ScrollView style={{ height: 500 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[0].fullName,
              cImg: allCharacters[0].imageUrl,
              cTitle: allCharacters[0].title,
              cFamily: allCharacters[0].family,
            });
          }}
        >
          <Character
            cName={allCharacters[0].fullName}
            cImg={allCharacters[0].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[1].fullName,
              cImg: allCharacters[1].imageUrl,
              cTitle: allCharacters[1].title,
              cFamily: allCharacters[1].family,
            });
          }}
        >
          <Character
            cName={allCharacters[1].fullName}
            cImg={allCharacters[1].imageUrl}
          />
        </Pressable>

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
              cName: allCharacters[7].fullName,
              cImg: allCharacters[7].imageUrl,
              cTitle: allCharacters[7].title,
              cFamily: allCharacters[7].family,
            });
          }}
        >
          <Character
            cName={allCharacters[7].fullName}
            cImg={allCharacters[7].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[8].fullName,
              cImg: allCharacters[8].imageUrl,
              cTitle: allCharacters[8].title,
              cFamily: allCharacters[8].family,
            });
          }}
        >
          <Character
            cName={allCharacters[8].fullName}
            cImg={allCharacters[8].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[9].fullName,
              cImg: allCharacters[9].imageUrl,
              cTitle: allCharacters[9].title,
              cFamily: allCharacters[9].family,
            });
          }}
        >
          <Character
            cName={allCharacters[9].fullName}
            cImg={allCharacters[9].imageUrl}
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
              cName: allCharacters[12].fullName,
              cImg: allCharacters[12].imageUrl,
              cTitle: allCharacters[12].title,
              cFamily: allCharacters[12].family,
            });
          }}
        >
          <Character
            cName={allCharacters[12].fullName}
            cImg={allCharacters[12].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[13].fullName,
              cImg: allCharacters[13].imageUrl,
              cTitle: allCharacters[13].title,
              cFamily: allCharacters[13].family,
            });
          }}
        >
          <Character
            cName={allCharacters[13].fullName}
            cImg={allCharacters[13].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[14].fullName,
              cImg: allCharacters[14].imageUrl,
              cTitle: allCharacters[14].title,
              cFamily: allCharacters[14].family,
            });
          }}
        >
          <Character
            cName={allCharacters[14].fullName}
            cImg={allCharacters[14].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[15].fullName,
              cImg: allCharacters[15].imageUrl,
              cTitle: allCharacters[15].title,
              cFamily: allCharacters[15].family,
            });
          }}
        >
          <Character
            cName={allCharacters[15].fullName}
            cImg={allCharacters[15].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[16].fullName,
              cImg: allCharacters[16].imageUrl,
              cTitle: allCharacters[16].title,
              cFamily: allCharacters[16].family,
            });
          }}
        >
          <Character
            cName={allCharacters[16].fullName}
            cImg={allCharacters[16].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[17].fullName,
              cImg: allCharacters[17].imageUrl,
              cTitle: allCharacters[17].title,
              cFamily: allCharacters[17].family,
            });
          }}
        >
          <Character
            cName={allCharacters[17].fullName}
            cImg={allCharacters[17].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[18].fullName,
              cImg: allCharacters[18].imageUrl,
              cTitle: allCharacters[18].title,
              cFamily: allCharacters[18].family,
            });
          }}
        >
          <Character
            cName={allCharacters[18].fullName}
            cImg={allCharacters[18].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[19].fullName,
              cImg: allCharacters[19].imageUrl,
              cTitle: allCharacters[19].title,
              cFamily: allCharacters[19].family,
            });
          }}
        >
          <Character
            cName={allCharacters[19].fullName}
            cImg={allCharacters[19].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[20].fullName,
              cImg: allCharacters[20].imageUrl,
              cTitle: allCharacters[20].title,
              cFamily: allCharacters[20].family,
            });
          }}
        >
          <Character
            cName={allCharacters[20].fullName}
            cImg={allCharacters[20].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[21].fullName,
              cImg: allCharacters[21].imageUrl,
              cTitle: allCharacters[21].title,
              cFamily: allCharacters[21].family,
            });
          }}
        >
          <Character
            cName={allCharacters[21].fullName}
            cImg={allCharacters[21].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[22].fullName,
              cImg: allCharacters[22].imageUrl,
              cTitle: allCharacters[22].title,
              cFamily: allCharacters[22].family,
            });
          }}
        >
          <Character
            cName={allCharacters[22].fullName}
            cImg={allCharacters[22].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[23].fullName,
              cImg: allCharacters[23].imageUrl,
              cTitle: allCharacters[23].title,
              cFamily: allCharacters[23].family,
            });
          }}
        >
          <Character
            cName={allCharacters[23].fullName}
            cImg={allCharacters[23].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[24].fullName,
              cImg: allCharacters[24].imageUrl,
              cTitle: allCharacters[24].title,
              cFamily: allCharacters[24].family,
            });
          }}
        >
          <Character
            cName={allCharacters[24].fullName}
            cImg={allCharacters[24].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[25].fullName,
              cImg: allCharacters[25].imageUrl,
              cTitle: allCharacters[25].title,
              cFamily: allCharacters[25].family,
            });
          }}
        >
          <Character
            cName={allCharacters[25].fullName}
            cImg={allCharacters[25].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[26].fullName,
              cImg: allCharacters[26].imageUrl,
              cTitle: allCharacters[26].title,
              cFamily: allCharacters[26].family,
            });
          }}
        >
          <Character
            cName={allCharacters[26].fullName}
            cImg={allCharacters[26].imageUrl}
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
              cName: allCharacters[28].fullName,
              cImg: allCharacters[28].imageUrl,
              cTitle: allCharacters[28].title,
              cFamily: allCharacters[28].family,
            });
          }}
        >
          <Character
            cName={allCharacters[28].fullName}
            cImg={allCharacters[28].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[29].fullName,
              cImg: allCharacters[29].imageUrl,
              cTitle: allCharacters[29].title,
              cFamily: allCharacters[29].family,
            });
          }}
        >
          <Character
            cName={allCharacters[29].fullName}
            cImg={allCharacters[29].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[30].fullName,
              cImg: allCharacters[30].imageUrl,
              cTitle: allCharacters[30].title,
              cFamily: allCharacters[30].family,
            });
          }}
        >
          <Character
            cName={allCharacters[30].fullName}
            cImg={allCharacters[30].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[31].fullName,
              cImg: allCharacters[31].imageUrl,
              cTitle: allCharacters[31].title,
              cFamily: allCharacters[31].family,
            });
          }}
        >
          <Character
            cName={allCharacters[31].fullName}
            cImg={allCharacters[31].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[32].fullName,
              cImg: allCharacters[32].imageUrl,
              cTitle: allCharacters[32].title,
              cFamily: allCharacters[32].family,
            });
          }}
        >
          <Character
            cName={allCharacters[32].fullName}
            cImg={allCharacters[32].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[33].fullName,
              cImg: allCharacters[33].imageUrl,
              cTitle: allCharacters[33].title,
              cFamily: allCharacters[33].family,
            });
          }}
        >
          <Character
            cName={allCharacters[33].fullName}
            cImg={allCharacters[33].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[35].fullName,
              cImg: allCharacters[35].imageUrl,
              cTitle: allCharacters[35].title,
              cFamily: allCharacters[35].family,
            });
          }}
        >
          <Character
            cName={allCharacters[35].fullName}
            cImg={allCharacters[35].imageUrl}
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

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[37].fullName,
              cImg: allCharacters[37].imageUrl,
              cTitle: allCharacters[37].title,
              cFamily: allCharacters[37].family,
            });
          }}
        >
          <Character
            cName={allCharacters[37].fullName}
            cImg={allCharacters[37].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[38].fullName,
              cImg: allCharacters[38].imageUrl,
              cTitle: allCharacters[38].title,
              cFamily: allCharacters[38].family,
            });
          }}
        >
          <Character
            cName={allCharacters[38].fullName}
            cImg={allCharacters[38].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[39].fullName,
              cImg: allCharacters[39].imageUrl,
              cTitle: allCharacters[39].title,
              cFamily: allCharacters[39].family,
            });
          }}
        >
          <Character
            cName={allCharacters[39].fullName}
            cImg={allCharacters[39].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[40].fullName,
              cImg: allCharacters[40].imageUrl,
              cTitle: allCharacters[40].title,
              cFamily: allCharacters[40].family,
            });
          }}
        >
          <Character
            cName={allCharacters[40].fullName}
            cImg={allCharacters[40].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[41].fullName,
              cImg: allCharacters[41].imageUrl,
              cTitle: allCharacters[41].title,
              cFamily: allCharacters[41].family,
            });
          }}
        >
          <Character
            cName={allCharacters[41].fullName}
            cImg={allCharacters[41].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[42].fullName,
              cImg: allCharacters[42].imageUrl,
              cTitle: allCharacters[42].title,
              cFamily: allCharacters[42].family,
            });
          }}
        >
          <Character
            cName={allCharacters[42].fullName}
            cImg={allCharacters[42].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[43].fullName,
              cImg: allCharacters[43].imageUrl,
              cTitle: allCharacters[43].title,
              cFamily: allCharacters[43].family,
            });
          }}
        >
          <Character
            cName={allCharacters[43].fullName}
            cImg={allCharacters[43].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[44].fullName,
              cImg: allCharacters[4].imageUrl,
              cTitle: allCharacters[44].title,
              cFamily: allCharacters[44].family,
            });
          }}
        >
          <Character
            cName={allCharacters[44].fullName}
            cImg={allCharacters[44].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[45].fullName,
              cImg: allCharacters[45].imageUrl,
              cTitle: allCharacters[45].title,
              cFamily: allCharacters[45].family,
            });
          }}
        >
          <Character
            cName={allCharacters[45].fullName}
            cImg={allCharacters[45].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[46].fullName,
              cImg: allCharacters[46].imageUrl,
              cTitle: allCharacters[46].title,
              cFamily: allCharacters[46].family,
            });
          }}
        >
          <Character
            cName={allCharacters[46].fullName}
            cImg={allCharacters[46].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[47].fullName,
              cImg: allCharacters[47].imageUrl,
              cTitle: allCharacters[47].title,
              cFamily: allCharacters[47].family,
            });
          }}
        >
          <Character
            cName={allCharacters[47].fullName}
            cImg={allCharacters[47].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[48].fullName,
              cImg: allCharacters[48].imageUrl,
              cTitle: allCharacters[48].title,
              cFamily: allCharacters[48].family,
            });
          }}
        >
          <Character
            cName={allCharacters[48].fullName}
            cImg={allCharacters[48].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[49].fullName,
              cImg: allCharacters[49].imageUrl,
              cTitle: allCharacters[49].title,
              cFamily: allCharacters[49].family,
            });
          }}
        >
          <Character
            cName={allCharacters[49].fullName}
            cImg={allCharacters[49].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[50].fullName,
              cImg: allCharacters[50].imageUrl,
              cTitle: allCharacters[50].title,
              cFamily: allCharacters[50].family,
            });
          }}
        >
          <Character
            cName={allCharacters[50].fullName}
            cImg={allCharacters[50].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[51].fullName,
              cImg: allCharacters[51].imageUrl,
              cTitle: allCharacters[51].title,
              cFamily: allCharacters[51].family,
            });
          }}
        >
          <Character
            cName={allCharacters[51].fullName}
            cImg={allCharacters[51].imageUrl}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CharacterInfo", {
              cName: allCharacters[52].fullName,
              cImg: allCharacters[52].imageUrl,
              cTitle: allCharacters[52].title,
              cFamily: allCharacters[52].family,
            });
          }}
        >
          <Character
            cName={allCharacters[52].fullName}
            cImg={allCharacters[52].imageUrl}
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

// filter functions
function getStarks({ navigation }) {
  navigation.navigate("Starks");
}
