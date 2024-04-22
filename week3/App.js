import { StyleSheet, View } from "react-native";
import RecipeGallery from "./components/RecipeGallery";

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeGallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
