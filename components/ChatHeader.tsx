import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

export const ChatHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.headerInnerContainer}>
      <Text style={styles.headerText}>To</Text>
      <TextInput placeholder="+ Recipients" style={styles.headerInput} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignSelf: "center",
    marginTop: "5%",
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: "#919EAB",
  },
  headerInnerContainer: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 17,
    fontWeight: "500",
    marginRight: "5%",
  },
  headerInput: {
    borderWidth: 0.8,
    width: "85%",
    height: 50,
    borderRadius: 10,
    borderColor: "#919EAB",
    paddingLeft: 10,
  },
});
