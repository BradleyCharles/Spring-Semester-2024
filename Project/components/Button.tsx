import { StyleSheet, Pressable } from "react-native";
import { View, Text } from "@/components/Themed";
import { Link } from "expo-router";

interface buttonProps {
  href?: string;
  label?: string;
  onPress?: any;
}

export default function Button({ href = "", label, onPress }: buttonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Link href={href} asChild>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </Link>
    </View>
  );
}

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
