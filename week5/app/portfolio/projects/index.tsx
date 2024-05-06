import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Seperator } from "@/components/SmallComponents";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Seperator />
      <ButtonComponent
        href="/portfolio/projects/recipe-gallery/"
        title="Recipe Gallery"
      />
      <Seperator />
      <ButtonComponent href="/portfolio/projects/" title="Coming Soon!" />
      <Seperator />
      <ButtonComponent href="/portfolio/projects/" title="Coming Soon!" />
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
