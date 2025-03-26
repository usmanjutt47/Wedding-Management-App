import { Stack } from "expo-router";
import { api } from "@/utils/api";
import { useState } from "react";

export default function RootLayout() {
  const [client] = useState(() => api.createClient());

  return (
    <api.Provider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </api.Provider>
  );
}
