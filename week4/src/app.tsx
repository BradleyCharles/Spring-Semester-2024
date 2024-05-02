import { StyleSheet, View, Text } from "react-native"
import { Link } from "expo-router"

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="">
        <Text>Hello</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
