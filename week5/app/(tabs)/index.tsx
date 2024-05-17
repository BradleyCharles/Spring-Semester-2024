import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Separator } from "@/components/SmallComponents";

export default function page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      <Separator />
      <ButtonComponent href="/tanstack/" title="Tanstack" />
      <Separator />
      <ButtonComponent href="/portfolio/" title="Enhanced Portfolio" />
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
