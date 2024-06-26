import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ButtonComponent from "@/components/ButtonComponent";
import Separator from "@/components/separator";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Separator />
      <ButtonComponent
        href="/portfolio/projects/recipe-gallery/"
        title="Recipe Gallery"
      />
      <Separator />
      <ButtonComponent href="/portfolio/projects/" title="Coming Soon!" />
      <Separator />
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
