import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Separator } from "@/components/SmallComponents";
import React, { useState } from "react";
import Button from "@/components/Button";

export default function Generic(): JSX.Element {
  return (
    <View style={styles.statusBar}>
      <StatusBar />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Exploring Decorators in TypeScript </Text>
          <Separator />
          <Button label="button" onPress={() => null} />
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    marginTop: 3,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
