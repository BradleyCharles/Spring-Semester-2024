import { ScrollView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "@/components/Themed";
import { Button, Separator } from "@/components/SmallComponents";
import Navigation from "@/components/navigation";

export default function page() {
  const smallSeperator = 10;
  return (
    <View style={styles.statusBar}>
      <StatusBar />

      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Navigation />
          <Text style={styles.label}>
            Test the different HTTP requests here!
          </Text>
          <Separator size={smallSeperator} />
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
