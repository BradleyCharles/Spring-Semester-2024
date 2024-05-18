import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/profilepic.jpg");

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textLarge}>Brad's Profile</Text>
      <Text style={styles.textLarge}>North Seattle College</Text>
      <View style={styles.imageContainer}>
        <ImageViewer
          style={styles.image}
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        <Button label="Choose a photo" onPress={pickImageAsync} />
      </View>
      <Text style={styles.textLarge}>Professional life</Text>
      <Text style={styles.text}>
        I am Bradley Charles, currently enrolled as a junior at North Seattle
        College pursuing a Bachelor of Applied Science degree in Application
        Development. With a solid foundation built over several years in IT,
        computer repair, and diagnostics, I am now dedicated to advancing my
        career in technology by transitioning into software development.
      </Text>
      <Text style={styles.text}>
        My expertise extends to full-stack development, in addition to my focus
        on front-end development and complemented by my background and formal
        education in design. Additionally, I am keen on expanding my expertise
        in software security and have resolved to undertake further learning to
        enhance these skills.
      </Text>
      <Text style={styles.textLarge}>Personal life</Text>
      <Text style={styles.text}>
        Nestled among the rolling peaks of the Appalachian mountains, I
        discovered my passion for outdoor exploration at a young age. There's
        something exhilarating about embarking on a hike through winding trails,
        diving into the cool waters of mountain streams, or setting up camp
        under the star-studded canopy of the night sky. These experiences have
        become an integral part of my identity, offering solace and adventure in
        equal measure whenever the weather permits.
      </Text>
      <Text style={styles.text}>
        Yet, when the elements prove less accommodating, I find comfort and
        camaraderie in the company of my wife and friends. Whether gathered
        around a table engaging in strategic battles of wit and luck in board
        games, or testing our skills and friendships in spirited card game
        competitions, laughter and friendly banter are always in abundance.
      </Text>
      <Text style={styles.text}>
        In quieter moments, I immerse myself in the boundless worlds of
        literature and television. The allure of sci-fi and fantasy genres
        captivates my imagination, transporting me to distant galaxies, magical
        realms, and thrilling adventures beyond the confines of reality. Through
        books and screen alike, I find respite and inspiration, each story a
        portal to new possibilities and perspectives.
      </Text>
      <Text style={[styles.text, { marginBottom: 40 }]}>
        In essence, whether traversing rugged landscapes or engaging in indoor
        pastimes, my life is enriched by a tapestry of experiences that
        celebrate the beauty of nature, the joy of companionship, and the
        limitless realms of imagination.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 25,
  },
  text: {
    marginVertical: 10,
  },
  textLarge: {
    fontSize: 18,
    marginVertical: 10,
  },
});
