import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    if (email === "" || password === "") {
      Alert.alert("Please fill in both email and password fields.");
      return;
    }

    const studentEmail = "student@example.com";
    const adminEmail = "admin@example.com";
    const studentPassword = "password";
    const adminPassword = "adminpassword";

    if (email === studentEmail && password === studentPassword) {
      navigation.navigate("home"); // Navigate to student screen
    } else if (email === adminEmail && password === adminPassword) {
      navigation.navigate("home"); // Navigate to admin screen
    } else {
      Alert.alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0BEC5"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0BEC5"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableHighlight style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register", {})}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3F2FD",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  logo: {
    width: 250,
    height: 120,
    borderRadius: 10,
  },
  form: {
    alignItems: "center",
    width: "90%",
    height: "60%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    color: "#37474F",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    height: 40,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    borderColor: "#000000",
    borderRadius: 5,
  },
  loginText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#03A9F4",
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  registerText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  quoteContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  quoteText: {
    fontStyle: "italic",
    color: "#424242",
    fontSize: 16,
    textAlign: "center",
  },
});