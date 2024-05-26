import Profile from "@/components/Profile";
import { View } from "@/components/Themed";
import { StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.statusBar}>
      <StatusBar />
      <View style={styles.container}>
        <Profile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Ensure the profile starts below the status bar
  },
  container: {
    flex: 1, // Take up all available space
  },
});