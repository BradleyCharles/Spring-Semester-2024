import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ButtonComponent, Separator } from "@/components/SmallComponents";

export default function page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AD 340</Text>
      <Separator />
      <Text style={styles.title}>Week 5</Text>
      <Separator />
      <ButtonComponent
        href="/week5/tanstack/"
        title="Assignment: Fetching Dog Data with TanStack Query "
      />
      <Separator />
      <ButtonComponent
        href="/week5/portfolio/"
        title="Assignment: Extend Personal Portfolio App with Expo Image Picker "
      />
      <Separator />
      <Text style={styles.title}>Week 6</Text>
      <Separator />
      <ButtonComponent
        href="/week6/"
        title="Assignment: Building a Generic Utility Library in TypeScript"
      />
      <Separator />
      <ButtonComponent
        href="/week6/"
        title="Assignment: Exploring Decorators in TypeScript "
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
