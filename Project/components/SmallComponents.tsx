import React from "react";
import { Button } from "react-native";
import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const defaultSeparatorSize = 25;

const ButtonComponent = ({ href = "/", title = "" }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Link href={href} asChild>
        <Button title={title}></Button>
      </Link>
    </View>
  );
};

const Separator = ({ size = defaultSeparatorSize }) => {
  return (
    <View
      style={[styles.separator, { width: `${size}%` }]}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    height: 5,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 25,
  },
});

export { ButtonComponent, Separator };