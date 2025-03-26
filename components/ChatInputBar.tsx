import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";

export default function ChatInputBar() {
  return (
    <View style={styles.chatContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Entypo name="emoji-happy" size={22} color="#919eab" />
        </TouchableOpacity>
        <TextInput placeholder="Type a message" />
      </View>
      <View style={styles.chatInnerContainer}>
        <TouchableOpacity>
          <MaterialIcons name="photo" size={22} color="#919EAB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="link" size={22} color="#919EAB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-voice" size={22} color="#919EAB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    position: "absolute",
    bottom: "3%",
    elevation: 1,
    paddingLeft: 10,
  },
  chatInnerContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginRight: "5%",
  },
});
