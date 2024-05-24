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
          <Text style={styles.label}>Week 5 Assignments</Text>
          <Separator size={smallSeperator} />
          <Button
            href="/week5/tanstack/"
            label="Fetching Dog Data with TanStack Query "
          />
          <Separator size={smallSeperator} />
          <Button
            href="/week5/portfolio/"
            label="Extend Personal Portfolio App with Expo Image Picker "
          />
          <Separator size={smallSeperator} />
          <Text style={styles.label}>Week 6 Assignments</Text>
          <Separator size={smallSeperator} />
          <Button
            href="/week6/generic"
            label="Building a Generic Utility Library in TypeScript"
          />
          <Separator size={smallSeperator} />
          <Button
            href="/week6/decorator"
            label="Exploring Decorators in TypeScript "
          />
          <Separator size={smallSeperator} />
          <Text style={styles.label}>Week 7 Assignments</Text>
          <Separator size={smallSeperator} />
          <Button
            href="/week7/"
            label="Building and Exploring Controllers in NestJS"
          />
          <Separator size={smallSeperator} />
          <Button
            href="/week7/"
            label="Managing Test Blog Posts with TanStack Query"
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
