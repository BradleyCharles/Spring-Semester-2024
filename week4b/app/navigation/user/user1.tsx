import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User #1 Profile Page</Text>
      <Text>This page will return to home using replace</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link replace href="/navigation/" asChild>
        <Button title="Home"></Button>
      </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
    width: "50%",
  },
});
