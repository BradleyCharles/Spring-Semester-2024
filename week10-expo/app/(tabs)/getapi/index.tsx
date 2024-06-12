import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Getapi from "./getapi";
import { View } from "@/components/Themed";
import { StyleSheet, StatusBar } from "react-native";
import Navigation from "@/components/navigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.statusBar}>
      <StatusBar />
      <View style={styles.container}>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          <Getapi />
        </QueryClientProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Ensure the profile starts below the status bar
  },
  container: {
    flex: 1, // Take up all available space
    alignItems: "center",
    justifyContent: "center",
  },
});
