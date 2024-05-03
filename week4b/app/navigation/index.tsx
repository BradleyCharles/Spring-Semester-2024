import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function Page() {
  const usernumber = Math.ceil(Math.random() * 3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href="/navigation/about" asChild>
        <Button title="About Page"></Button>
      </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link
        href={{
          pathname: "/navigation/user/[id]",
          params: { id: `user${usernumber}` },
        }}
      >
        <Button title={`Userpage for user #${usernumber}`}></Button>
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
    width: "50%",
  },
});
