import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="deleteapi" options={{ headerShown: false }} />
      <Stack.Screen name="getapi" options={{ headerShown: false }} />
      <Stack.Screen name="getapi-index" options={{ headerShown: false }} />
      <Stack.Screen name="postapi" options={{ headerShown: false }} />
      <Stack.Screen name="putapi" options={{ headerShown: false }} />
    </Stack>
  );
}
