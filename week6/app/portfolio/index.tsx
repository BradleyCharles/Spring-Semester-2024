import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Seperator } from "@/components/SmallComponents";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <Seperator />
      <ButtonComponent href="/portfolio/about/" title="About Me" />
      <Seperator />
      <ButtonComponent href="/portfolio/contact/" title="Contact" />
      <Seperator />
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
