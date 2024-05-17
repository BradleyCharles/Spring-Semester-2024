import { ImageBackground, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Separator } from "@/components/SmallComponents";
import React from "react";
import { Link } from "expo-router";

export default function Page(): JSX.Element {
  const breedsImage = {
    uri: "https://www.wfxrtv.com/wp-content/uploads/sites/20/2023/02/AdobeStock_180473802-copy-2.jpg?strip=1&w=640",
  };
  const factsImage = {
    uri: "https://assets-global.website-files.com/5e3ca6c435ea8d0043aa12ec/62606b94bcf0ef83a272a1fb_istockphoto-1170579608-612x612.jpeg",
  };
  const groupsImage = {
    uri: "https://cdn.menardc.com/main/store/20090519001/assets/images6/PetCenter/WhichGroupisYourDogIn/BrusselsGriffon.jpg",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog API</Text>
      <Separator />
      <Link href="/week5/tanstack/breeds/">
        <ImageBackground source={breedsImage} style={styles.image}>
          <Text style={styles.text}>Breeds!</Text>
        </ImageBackground>
      </Link>
      <Separator />
      <Link href="/week5/tanstack/facts/">
        <ImageBackground source={factsImage} style={styles.image}>
          <Text style={styles.text}>Facts!</Text>
        </ImageBackground>
      </Link>
      <Separator />
      <Link href="/week5/tanstack/groups/">
        <ImageBackground source={groupsImage} style={styles.image}>
          <Text style={styles.text}>Groups!</Text>
        </ImageBackground>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    resizeMode: "cover",
    width: 200,
    height: 75,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 25,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
