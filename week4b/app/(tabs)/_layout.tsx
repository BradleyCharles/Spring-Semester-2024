import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Separator from "@/components/separator";
import ButtonComponent from "@/components/ButtonComponent";

export default function page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Separator />
      <ButtonComponent
        href="/navigation/"
        title="Implementing Navigation with Expo Router"
      />
      <Separator />
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
  separator: {
    marginVertical: 20,
    height: 5,
    width: "50%",
    backgroundColor: "#666",
  },
});
