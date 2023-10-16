import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainLibrary from "./MainLibrary.js";

// characterList = [
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
//   <Character />,
// ];

export default function App() {
  return (
    <MainLibrary />
    // <ScrollView contentContainerStyle={styles.container}>
    //   <View
    //     style={{
    //       width: 400,
    //       height: 100,
    //       backgroundColor: "pink",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       justifyContent: "space-evenly",
    //       borderRadius: 20,
    //       padding: 5,
    //       margnBottom: 5,
    //       marginTop: 10,
    //     }}
    //   >
    //     <Text>Search Bar</Text>
    //     <Text>Filter</Text>
    //   </View>
    //   <ScrollView
    //     style={{
    //       width: 400,
    //       height: 400,
    //     }}
    //   >
    //     {characterList}
    //   </ScrollView>
    //   {/* <CharacterCard /> */}
    // </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3B2B73",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
