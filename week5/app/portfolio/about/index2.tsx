import { View } from "@/components/Themed";
import Profile from "@/components/Profile";
import BackButton from "@/components/BackButton";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <BackButton />
      </View>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    marginTop: 45,
    flexDirection: "row", // Ensure items are aligned horizontally
    alignItems: "flex-end", // Align items to the bottom of the container
    justifyContent: "flex-end", // Align items to the end of the container
  },
});
