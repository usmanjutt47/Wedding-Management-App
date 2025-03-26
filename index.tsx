import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";

import CustomInput from "@/components/CustomInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.innerContainer}>
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Sign in to your account</Text>
          <View style={styles.getStartedTextContainer}>
            <Text style={styles.dontHaveAccText}>Don’t have an account? </Text>
            <Link href={"/register"} asChild>
              <TouchableOpacity>
                <Text style={styles.getStartedText}>Get started</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View style={styles.emailInputContainer}>
            <CustomInput
              placeholder="Email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Link href={"/forgot-password"} asChild>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </Link>
            <CustomInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Link href={"/"}>
            <TouchableOpacity style={styles.signInBtn}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
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
  forgotText: {
    color: "#1c252e",
    fontSize: 14,
    fontWeight: "400",
    alignSelf: "flex-end",
    marginTop: "6%",
    marginBottom: "3%",
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
});
