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
    { key: 4, value: "Favorites" },
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

const allCharacters = [
  {
    id: 0,
    firstName: "Daenerys",
    lastName: "Targaryen",
    fullName: "Daenerys Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  {
    id: 1,
    firstName: "Samwell",
    lastName: "Tarly",
    fullName: "Samwell Tarly",
    title: "Maester",
    family: "House Tarly",
    image: "sam.jpg",
    imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
  },
  {
    id: 2,
    firstName: "Jon",
    lastName: "Snow",
    fullName: "Jon Snow",
    title: "King of the North",
    family: "House Stark",
    image: "jon-snow.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
  },
  {
    id: 3,
    firstName: "Arya",
    lastName: "Stark",
    fullName: "Arya Stark",
    title: "No One",
    family: "House Stark",
    image: "arya-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
  },
  {
    id: 4,
    firstName: "Sansa",
    lastName: "Stark",
    fullName: "Sansa Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "sansa-stark.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
  },
  {
    id: 5,
    firstName: "Brandon",
    lastName: "Stark",
    fullName: "Brandon Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "bran-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
  },
  {
    id: 6,
    firstName: "Ned",
    lastName: "Stark",
    fullName: "Ned Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "ned-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ned-stark.jpg",
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Baratheon",
    fullName: "Robert Baratheon",
    title: "Lord of the Seven Kingdoms",
    family: "House Baratheon",
    image: "robert-baratheon.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
  },
  {
    id: 8,
    firstName: "Jamie",
    lastName: "Lannister",
    fullName: "Jamie Lannister",
    title: "Lord Commander of the Kingsguard",
    family: "House Lannister",
    image: "jaime-lannister.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
  },
  {
    id: 9,
    firstName: "Cersei",
    lastName: "Lannister",
    fullName: "Cersei Lannister",
    title: "Lady of Casterly Rock",
    family: "House Lannister",
    image: "cersei.jpg",
    imageUrl: "https://thronesapi.com/assets/images/cersei.jpg",
  },
  {
    id: 10,
    firstName: "Cateyln",
    lastName: "Stark",
    fullName: "Catelyn Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "catelyn-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/catelyn-stark.jpg",
  },
  {
    id: 11,
    firstName: "Robb",
    lastName: "Stark",
    fullName: "Rob Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "robb-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/robb-stark.jpg",
  },
  {
    id: 12,
    firstName: "Theon",
    lastName: "Greyjoy",
    fullName: "Theon Greyjoy",
    title: "Captain of Sea Bitch",
    family: "House Greyjoy",
    image: "theon.jpg",
    imageUrl: "https://thronesapi.com/assets/images/theon.jpg",
  },
  {
    id: 13,
    firstName: "Joffrey",
    lastName: "Baratheon",
    fullName: "Joffrey Baratheon",
    title: "Lord of the Seven Kingdoms, Protector of the Realm",
    family: "House Lanister",
    image: "joffrey.jpg",
    imageUrl: "https://thronesapi.com/assets/images/joffrey.jpg",
  },
  {
    id: 14,
    firstName: "Tyrion",
    lastName: "Lannister",
    fullName: "Tyrion Lannister",
    title: "Hand of the Queen",
    family: "House Lanister",
    image: "tyrion-lannister.jpg",
    imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg",
  },
  {
    id: 15,
    firstName: "Sandor",
    lastName: "Clegane",
    fullName: "The Hound",
    title: "The Hound",
    family: "House Clegane",
    image: "the-hound.jpg",
    imageUrl: "https://thronesapi.com/assets/images/the-hound.jpg",
  },
  {
    id: 16,
    firstName: "Petyr",
    lastName: "Baelish",
    fullName: "Petyr Baelish",
    title: "Littlefinger",
    family: "House Baelish",
    image: "littlefinger.jpg",
    imageUrl: "https://thronesapi.com/assets/images/littlefinger.jpg",
  },
  {
    id: 17,
    firstName: "Davos",
    lastName: "Seaworth",
    fullName: "Davos Seaworth",
    title: "Hand of the King",
    family: "House Seaworth",
    image: "davos-seaworth.png",
    imageUrl: "https://thronesapi.com/assets/images/davos-seaworth.png",
  },
  {
    id: 18,
    firstName: "Stannis",
    lastName: "Baratheon",
    fullName: "Stannis Baratheon",
    title: "Lord of Dragonstone",
    family: "House Baratheon",
    image: "stannis.jpg",
    imageUrl: "https://thronesapi.com/assets/images/stannis.jpg",
  },
  {
    id: 19,
    firstName: "Varys",
    lastName: "Unknown",
    fullName: "Varys",
    title: "Master of Whisperers",
    family: "Unknown",
    image: "varys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/varys.jpg",
  },
  {
    id: 20,
    firstName: "Khal",
    lastName: "Drogo",
    fullName: "Khal Drogo",
    title: "Khal",
    family: "House Targaryen",
    image: "khal-drogo.jpg",
    imageUrl: "https://thronesapi.com/assets/images/khal-drogo.jpg",
  },
  {
    id: 21,
    firstName: "Margaery",
    lastName: "Tyrell",
    fullName: "Margaery Tyrell",
    title: "Queen of the Seven Kingdoms",
    family: "House Tyrell",
    image: "margaery-tyrell.jpg",
    imageUrl: "https://thronesapi.com/assets/images/margaery-tyrell.jpg",
  },
  {
    id: 22,
    firstName: "Ygritte",
    lastName: "None",
    fullName: "Ygritte",
    title: "Spearwife",
    family: "Free Folk",
    image: "ygritte.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ygritte.jpg",
  },
  {
    id: 23,
    firstName: "Brienne",
    lastName: "Tarth",
    fullName: "Brienne of Tarth",
    title: "Lady Brienne",
    family: "Tarth",
    image: "brienne-tarth.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/brienne-tarth.jpeg",
  },
  {
    id: 24,
    firstName: "Missandei",
    lastName: "None",
    fullName: "Missandei",
    title: "Queen's Personal Advisor",
    family: "Naathi",
    image: "missandei.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/missandei.jpeg",
  },
  {
    id: 25,
    firstName: "Gilly",
    lastName: "None",
    fullName: "Gilly",
    title: "The Rabbit Keeper",
    family: "None",
    image: "gilly.jpg",
    imageUrl: "https://thronesapi.com/assets/images/gilly.jpg",
  },
  {
    id: 26,
    firstName: "Viserys",
    lastName: "Targaryan",
    fullName: "Viserys Targaryn",
    title: "King Viserys III",
    family: "Targaryan",
    image: "viserys-targaryan.jpg",
    imageUrl: "https://thronesapi.com/assets/images/viserys-targaryan.jpg",
  },
  {
    id: 27,
    firstName: "Rickon",
    lastName: "Stark",
    fullName: "Rickon Stark",
    title: "Prince",
    family: "Stark",
    image: "rickon.jpg",
    imageUrl: "https://thronesapi.com/assets/images/rickon.jpg",
  },
  {
    id: 28,
    firstName: "Roose",
    lastName: "Bolton",
    fullName: "Roose Bolton",
    title: "Lord of Dreadfort",
    family: "Bolton",
    image: "roose-bolton.jpg",
    imageUrl: "https://thronesapi.com/assets/images/roose-bolton.jpg",
  },
  {
    id: 29,
    firstName: "Daario",
    lastName: "Naharis",
    fullName: "Daario",
    title: "Commander of the Second Sons",
    family: "Naharis",
    image: "daario.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daario.jpg",
  },
  {
    id: 30,
    firstName: "Shae",
    lastName: "",
    fullName: "Shae",
    title: "Mistress",
    family: "Lorathi",
    image: "shae.jpg",
    imageUrl: "https://thronesapi.com/assets/images/shae.jpg",
  },
  {
    id: 31,
    firstName: "Tommen",
    lastName: "Baratheon",
    fullName: "Tommen Baratheon",
    title: "Prince",
    family: "Baratheon",
    image: "tommen.jpg",
    imageUrl: "https://thronesapi.com/assets/images/tommen.jpg",
  },
  {
    id: 32,
    firstName: "Gendry",
    lastName: "Baratheon",
    fullName: "Gendry Baratheon",
    title: "Lord of Storm's End",
    family: "Baratheon",
    image: "gendry.jpg",
    imageUrl: "https://thronesapi.com/assets/images/gendry.jpg",
  },
  {
    id: 33,
    firstName: "Jorah",
    lastName: "Mormont",
    fullName: "Jorah Mormont",
    title: "Knight",
    family: "Mormont",
    image: "jorah-mormont.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jorah-mormont.jpg",
  },
  {
    id: 34,
    firstName: "Robert",
    lastName: "Baratheon",
    fullName: "Robert Baratheon",
    title: "King",
    family: "Baratheon",
    image: "king-robert.jpg",
    imageUrl: "https://thronesapi.com/assets/images/king-robert.jpg",
  },
  {
    id: 35,
    firstName: "Ramsey",
    lastName: "Bolton",
    fullName: "Ramsey Bolton",
    title: "The Bastard of Bolton",
    family: "Bolton",
    image: "ramsey-bolton.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ramsey-bolton.jpg",
  },
  {
    id: 36,
    firstName: "Talisa",
    lastName: "Stark",
    fullName: "Talisa Stark",
    title: "Queen Consort",
    family: "Stark",
    image: "talisa-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/talisa-stark.jpg",
  },
  {
    id: 37,
    firstName: "Jeor",
    lastName: "Mormont",
    fullName: "Jeor Mormont",
    title: "Lord Commander of the Knight's Watch",
    family: "Mormont",
    image: "lord-commander-mormont.jpg",
    imageUrl: "https://thronesapi.com/assets/images/lord-commander-mormont.jpg",
  },
  {
    id: 38,
    firstName: "The High",
    lastName: "Sparrow",
    fullName: "The High Sparrow",
    title: "High Septon",
    family: "Sparrow",
    image: "the-high-sparrow.jpg",
    imageUrl: "https://thronesapi.com/assets/images/the-high-sparrow.jpg",
  },
  {
    id: 39,
    firstName: "Oberyn",
    lastName: "Martell",
    fullName: "Oberyn Martell",
    title: "Red Viper of Dorne",
    family: "Viper",
    image: "red-viper.jpg",
    imageUrl: "https://thronesapi.com/assets/images/red-viper.jpg",
  },
  {
    id: 40,
    firstName: "Melisandre",
    lastName: "The Red Woman",
    fullName: "Melisandre",
    title: "Melisandre of Asshai",
    family: "Unkown",
    image: "melisandre.jpg",
    imageUrl: "https://thronesapi.com/assets/images/melisandre.jpg",
  },
  {
    id: 41,
    firstName: "Jaqen",
    lastName: "H'ghar",
    fullName: "Jaqen H'ghar",
    title: "Faceless Men of Braavos",
    family: "Lorath",
    image: "jaqen-hghar.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jaqen-hghar.jpg",
  },
  {
    id: 42,
    firstName: "Tywin",
    lastName: "Lannister",
    fullName: "Tywin Lannister",
    title: "Lord Paramount of Westerlands",
    family: "Lannister",
    image: "tywin-lannister.jpg",
    imageUrl: "https://thronesapi.com/assets/images/tywin-lannister.jpg",
  },
  {
    id: 43,
    firstName: "Ellaria",
    lastName: "Sand",
    fullName: "Ellaria Sand",
    title: "Paramour of Prince Oberyn Martell",
    family: "Sand",
    image: "ellaria-sand.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ellaria-sand.jpg",
  },
  {
    id: 44,
    firstName: "Tormund",
    lastName: "Giantsbane",
    fullName: "Tormund Giantsbane",
    title: "Free Folk Warrior",
    family: "Free Folk",
    image: "tormund-giantsbane.jpg",
    imageUrl: "https://thronesapi.com/assets/images/tormund-giantsbane.jpg",
  },
  {
    id: 45,
    firstName: "Yara",
    lastName: "Greyjoy",
    fullName: "Yara Greyjoy",
    title: "Lady of the Iron Islands",
    family: "Greyjoy",
    image: "yara-greyjoy.jpg",
    imageUrl: "https://thronesapi.com/assets/images/yara-greyjoy.jpg",
  },
  {
    id: 46,
    firstName: "Euron",
    lastName: "Greyjoy",
    fullName: "Euron Greyjoy",
    title: "King of the iron Islands",
    family: "Greyjoy",
    image: "euron-greyjoy.jpg",
    imageUrl: "https://thronesapi.com/assets/images/euron-greyjoy.jpg",
  },
  {
    id: 47,
    firstName: "Wylis",
    lastName: "Hodor",
    fullName: "Hodor",
    title: "Servant of House Stark",
    family: "Stark",
    image: "hodor.jpg",
    imageUrl: "https://thronesapi.com/assets/images/hodor.jpg",
  },
  {
    id: 48,
    firstName: "",
    lastName: "Pycelle",
    fullName: "Pycelle",
    title: "Grand Maester of the Seven Kingdoms",
    family: "",
    image: "pycelle.jpg",
    imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
  },
  {
    id: 49,
    firstName: "Grey",
    lastName: "Worm",
    fullName: "Grey Worm",
    title: "Commander of the Unsullied",
    family: "Worm",
    image: "greyworm.jpg",
    imageUrl: "https://thronesapi.com/assets/images/greyworm.jpg",
  },
  {
    id: 50,
    firstName: "Olenna",
    lastName: "Tyrell",
    fullName: "Olenna Tyrell",
    title: "Queen of Thorns",
    family: "Tyrell",
    image: "olenna-tyrell.jpg",
    imageUrl: "https://thronesapi.com/assets/images/olenna-tyrell.jpg",
  },
  {
    id: 51,
    firstName: "Qyburn",
    lastName: "Grand Maester",
    fullName: "Qyburn",
    title: "Former maester of the Citadel",
    family: "Qyburn",
    image: "qyburn.jpg",
    imageUrl: "https://thronesapi.com/assets/images/qyburn.jpg",
  },
  {
    id: 52,
    firstName: "Lord",
    lastName: "Bronn",
    fullName: "Lord Bronn",
    title: "Lord of Highgarden",
    family: "Bronn",
    image: "bronn.jpg",
    imageUrl: "https://thronesapi.com/assets/images/bronn.jpg",
  },
];
