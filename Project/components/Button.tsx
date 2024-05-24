import { StyleSheet, Pressable } from "react-native";
import { View, Text } from "@/components/Themed";
import { Link } from "expo-router";
import React from "react";

interface ButtonProps {
  href?: string;
  label: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href = "", label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      {href ? (
        <Link href={href} style={styles.button}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </Link>
      ) : (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: "auto",
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
