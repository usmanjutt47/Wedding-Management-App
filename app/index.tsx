import { Button, Text, View } from "react-native";

import React from "react";
import { api } from "@/utils/api";

export default function Home() {
  const { trigger, isMutating, data } = api.register.useSWRMutation();

  const handleRegister = async () => {
    const response = await trigger({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    });

    console.log("Mutation Response:", response);
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Register" onPress={handleRegister} disabled={isMutating} />
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
}
