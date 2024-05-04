import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ButtonComponent from "@/components/ButtonComponent";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ButtonComponent href="/portfolio/about/" title="About Me" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ButtonComponent href="/portfolio/contact/" title="Contact" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ButtonComponent href="/portfolio/projects/" title="Projects" />
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
