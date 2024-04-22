import { StyleSheet, View } from "react-native";
import TaskManager from "./components/TaskManager";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 90,
    flex: 1,
    backgroundColor: "#fff",
  },
});
