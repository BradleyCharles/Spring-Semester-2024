import { StyleSheet, Image } from "react-native";

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
  style,
}) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={style} />;
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 25,
  },
});
