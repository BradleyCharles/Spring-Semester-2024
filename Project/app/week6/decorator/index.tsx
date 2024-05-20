import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Separator } from "@/components/SmallComponents";
import React, { useState } from "react";
import Button from "@/components/Button";

export default function Decorator(): JSX.Element {
  function SimpleLogger<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(
          `An instance of ${constructor.name} was created with arguments:`,
          args
        );
      }
    };
  }

  @SimpleLogger
  class MyTestClass {
    month: string;
    day: number;
    year: number;

    constructor(m: string, t: number, y: number) {
      this.month = m;
      this.day = t;
      this.year = y;
    }
  }

  const testInstance = new MyTestClass("June", 14, 2024);

  return (
    <View style={styles.statusBar}>
      <StatusBar />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.day}>Exploring Decorators in TypeScript </Text>
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
  day: {
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
