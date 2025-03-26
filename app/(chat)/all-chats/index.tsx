import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

import { ChatHeader } from "@/components/ChatHeader";
import ChatInputBar from "@/components/ChatInputBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Gradient from "@/components/Gradient";
import { Ionicons } from "@expo/vector-icons";
import { generateMockData as data } from "@/mock";

const { width } = Dimensions.get("window");

export default function AllChats() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.5)).current;
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data());

  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.5,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  return (
    <View style={styles.container}>
      {isModalVisible && (
        <>
          <StatusBar hidden />
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <Gradient style={styles.gradientStyle} />
            <View style={styles.modalInnerContainer}>
              <View style={styles.modalHeader}>
                <Image
                  source={require("../../../assets/images/logo.png")}
                  style={styles.image}
                />
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <TouchableOpacity onPress={closeModal}>
                    <Ionicons name="chevron-back" size={24} color="#919eab" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesome name="user" size={24} color="#919eab" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#919eab" />
                <TextInput
                  placeholder="Search"
                  value={search}
                  onChangeText={(text) => {
                    setSearch(text);
                    const filtered = data().filter((item) =>
                      item.name.toLowerCase().includes(text.toLowerCase())
                    );
                    setFilteredData(filtered);
                  }}
                  keyboardType="default"
                  style={{ flex: 1 }}
                />
              </View>
            </View>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 30, paddingLeft: "5%" }}
            >
              {filteredData.map(
                (item: {
                  id: string;
                  image: string;
                  name: string;
                  message: string;
                  time: string;
                }) => (
                  <View key={item.id} style={styles.chatModalContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.chatImage}
                    />
                    <View style={styles.messageContainer}>
                      <View style={{ width: "70%" }}>
                        <Text style={{ fontSize: 15 }} numberOfLines={1}>
                          {item.name}
                        </Text>
                        <Text
                          style={{ color: "#919eab" }}
                          lineBreakMode="tail"
                          numberOfLines={1}
                        >
                          {item.message}
                        </Text>
                      </View>
                      <Text style={{ color: "#919eab", paddingRight: 10 }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                )
              )}
            </ScrollView>
          </Animated.View>
        </>
      )}
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Chat</Text>
        <View style={styles.mainContainer}>
          <ChatHeader />
          <TouchableOpacity style={styles.userContainer} onPress={openModal}>
            <FontAwesome name="users" size={15} color="#fff" />
          </TouchableOpacity>
          <ChatInputBar />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  innerContainer: {
    height: "100%",
    width: "95%",
    alignSelf: "center",
  },
  heading: { fontSize: 21, fontWeight: "600" },
  mainContainer: {
    marginTop: 20,
    flex: 1,
    elevation: 1.5,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  userContainer: {
    height: 35,
    width: 40,
    backgroundColor: "#00A76F",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  modalContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15%",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 99,
    resizeMode: "contain",
  },
  gradientStyle: {
    position: "absolute",
    right: 0,
    opacity: 0.5,
  },
  modalInnerContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: "5%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#919eab",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: "5%",
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  chatModalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  chatImage: { height: 50, width: 50, borderRadius: 99 },
  messageContainer: {
    marginLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});
