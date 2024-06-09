import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="breeds" options={{ headerShown: false }} />
      <Stack.Screen name="facts" options={{ headerShown: false }} />
      <Stack.Screen name="groups" options={{ headerShown: false }} />
    </Stack>
  );
}
