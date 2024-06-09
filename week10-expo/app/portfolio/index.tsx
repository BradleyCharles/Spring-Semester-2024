import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Separator } from "@/components/SmallComponents";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <Separator />
      <ButtonComponent href="/portfolio/about/" title="About Me" />
      <Separator />
      <ButtonComponent href="/portfolio/contact/" title="Contact" />
      <Separator />
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
