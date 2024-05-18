import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="week5" options={{ headerShown: false }} />
      <Stack.Screen name="portfolio" options={{ headerShown: false }} />
      <Stack.Screen name="tanstack" options={{ headerShown: false }} />
    </Stack>
  );
}
