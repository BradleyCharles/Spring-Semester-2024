import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "@/components/Themed";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Phone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    marginVertical: 10,
  },
  textLarge: {
    fontSize: 18,
    marginVertical: 10,
  },
});
