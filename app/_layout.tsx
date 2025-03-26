import { Stack, useRouter } from "expo-router";

import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.push("/all-chats");
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)/index" />
      <Stack.Screen name="(auth)/register/index" />
      <Stack.Screen name="(auth)/forgot-password/index" />
      <Stack.Screen name="(chat)/all-chats/index" />
    </Stack>
  );
}
