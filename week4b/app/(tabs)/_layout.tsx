import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Link href="/recipe/" asChild>
        <Button title="Implementing Navigation with Expo Router "></Button>
      </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Link href="/recipe/" asChild>
        <Button title="Building Your Personal Portfolio App "></Button>
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
  separator: {
    marginVertical: 20,
    height: 5,
    width: "80%",
  },
});