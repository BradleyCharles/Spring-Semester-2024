import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="decorator" options={{ headerShown: false }} />
      <Stack.Screen name="generic" options={{ headerShown: false }} />
    </Stack>
  );
}
