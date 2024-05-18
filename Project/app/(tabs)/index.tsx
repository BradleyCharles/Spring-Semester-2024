import { ScrollView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "@/components/Themed";
import { Button, Separator } from "@/components/SmallComponents";

export default function page() {
  const smallSeperator = 10;
  return (
    <View style={styles.statusBar}>
      <StatusBar />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.label}>AD 340</Text>
          <Separator />
          <Text style={styles.label}>Week 5</Text>
          <Separator size={smallSeperator} />
          <Button
            href="/week5/tanstack/"
            label="Assignment: Fetching Dog Data with TanStack Query "
          />
          <Separator size={smallSeperator} />
          <Button
            href="/week5/portfolio/"
            label="Assignment: Extend Personal Portfolio App with Expo Image Picker "
          />
          <Separator size={smallSeperator} />
          <Text style={styles.label}>Week 6</Text>
          <Separator size={smallSeperator} />
          <Button
            href="/week6/generic"
            label="Assignment: Building a Generic Utility Library in TypeScript"
          />
          <Separator size={smallSeperator} />
          <Button
            href="/week6/decorator"
            label="Assignment: Exploring Decorators in TypeScript "
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
