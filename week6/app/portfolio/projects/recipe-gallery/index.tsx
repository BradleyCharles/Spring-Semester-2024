import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import RecipeGallery from "@/components/RecipeGallery";

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeGallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
