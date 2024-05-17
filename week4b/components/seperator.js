import { View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default Separator = () => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    height: 5,
    width: "50%",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 25,
  },
});
