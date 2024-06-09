import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Separator } from "@/components/SmallComponents";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

const PlaceholderImage = require("@/assets/images/gallery.png");

export default function Page(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickImageAsync = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert("No image was selected.");
      }
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Separator />
      <Pressable style={styles.imageContainer} onPress={pickImageAsync}>
        <ImageViewer
          style={styles.image}
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </Pressable>
      <ButtonComponent
        href="/portfolio/projects/recipe-gallery/"
        title="Recipe Gallery"
      />
      <Separator />
      <ButtonComponent href="/portfolio/projects/" title="Coming Soon!" />
      <Separator />
      <ButtonComponent href="/portfolio/projects/" title="Coming Soon!" />
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
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 25,
  },
});
