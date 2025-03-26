import { StatusBar, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Text>ForgotPassword</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
