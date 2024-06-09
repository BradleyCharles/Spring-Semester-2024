import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Button, Separator } from "@/components/SmallComponents";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Homepage</Text>
      <Separator />
      <Button href="/week5/portfolio/about/" label="About Me" />
      <Separator />
      <Button href="/week5/portfolio/contact/" label="Contact" />
      <Separator />
      <Button href="/week5/portfolio/projects/" label="Projects" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 20,
    height: 5,
    width: "50%",
  },
});
