import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import ButtonComponent from "@/components/ButtonComponent";
import Separator from "@/components/separator";

export default function Page() {
  const usernumber = Math.ceil(Math.random() * 3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <Separator />
      <ButtonComponent href="/navigation/about" title="About Page" />
      <Separator />
      <ButtonComponent
        href={
          {
            pathname: "/navigation/user/[id]",
            params: { id: `user${usernumber}` },
          } as never
        }
        title={`Userpage for user #${usernumber}`}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
