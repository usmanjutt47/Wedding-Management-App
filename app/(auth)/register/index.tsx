import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import CustomInput from "@/components/CustomInput";
import { Link } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: "5%" }}>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={require("../../../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>Get started absolutely free</Text>
            <View style={styles.getStartedTextContainer}>
              <Text style={styles.dontHaveAccText}>
                Already have an account?{" "}
              </Text>
              <Link href={"/"} asChild>
                <TouchableOpacity>
                  <Text style={styles.getStartedText}>Get started</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <View style={styles.emailInputContainer}>
              <CustomInput
                placeholder="First name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <CustomInput
                placeholder="Last name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                containerStyle={{ marginTop: "5%" }}
              />
              <CustomInput
                placeholder="First address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                containerStyle={{ marginTop: "5%" }}
              />

              <CustomInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                containerStyle={{ marginTop: "5%" }}
              />
            </View>
            <Link href={"/"} asChild>
              <TouchableOpacity style={styles.signInBtn}>
                <Text style={styles.signInText}>Sign up</Text>
              </TouchableOpacity>
            </Link>
            <View style={styles.termsConditionsContainer}>
              <Text style={styles.agreeText}>By signing up, I agree to </Text>
              <TouchableOpacity>
                <Text style={{ textDecorationLine: "underline" }}>
                  Terms of service{" "}
                </Text>
              </TouchableOpacity>
              <Text style={styles.agreeText}>and </Text>
              <TouchableOpacity>
                <Text style={{ textDecorationLine: "underline" }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    height: "100%",
    width: "95%",
    alignSelf: "center",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "10%",
  },
  getStartedTextContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: "2%",
  },
  getStartedText: {
    color: "#00a76f",
    fontWeight: "600",
    fontSize: 15,
  },
  dontHaveAccText: {
    fontSize: 15,
    color: "#637381",
    fontWeight: "400",
  },
  emailInputContainer: {
    marginTop: "20%",
    width: "100%",
  },
  signInBtn: {
    height: 50,
    width: "100%",
    backgroundColor: "#1C252E",
    borderRadius: 15,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  termsConditionsContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  agreeText: {
    color: "#637381",
    fontSize: 14,
  },
});
