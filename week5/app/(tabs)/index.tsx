import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Seperator } from "@/components/SmallComponents";

export default function page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Seperator />
      <ButtonComponent
        href="/navigation/"
        title="Implementing Navigation with Expo Router"
      />
      <Seperator />
      <ButtonComponent
        href="/portfolio/"
        title="Building Your Personal Portfolio App"
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
});
