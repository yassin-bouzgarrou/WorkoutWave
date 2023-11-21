import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import { useFonts } from "expo-font";

const SignupScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <View style={{ paddingTop: 70, paddingHorizontal: 30, marginTop: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 39,

            width: 550,
            fontFamily: "BebasNeue",
          }}
        >
          Create Accounts
        </Text>
        <Text
          style={{
            color: "#3A4750",
            fontSize: 16,
            marginVertical: 10,
            marginTop: -1,
            marginBottom: 10,
            width: 180,
            fontWeight: "300",
          }}
        >
          Please enter your credentials to proceed
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input label="Full Name" placeholder="Enter your Full Name" />

          <Input label="Phone" placeholder=" Enter your Phone" />
          <Input label="Email address" placeholder="Enter your email address" />
          <Input label="Password" placeholder="Enter your password" password />
          <View className=" -mt-2">
            <Button title="Create Account" />
          </View>

          <Text
            style={{
              color: "#303841",
              textAlign: "center",
              fontSize: 13,
              fontWeight: "300",
            }}
          >
            Or Register with
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer}>
            <View style={styles.buttonContent}>
              <Image
                source={require("../assets/images/googleLogo.png")} // Replace with the actual path to your logo
                style={styles.logo}
              />
              <Text style={styles.buttonText}>Connect with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          you already have an account?{" "}
          <Text style={{ fontWeight: "bold" }} onPress={()=>navigation.navigate("Login")}>Login!</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#FCFCFC",
    alignItems: "center",
  },
  bottomText: {
    color: "#191919",

    textAlign: "center",
    fontSize: 16,
  },
  buttonContainer: {

    height: 55,
    width: "100%",
    backgroundColor: "#F5F5F5",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: "grey",
  },
  buttonContent: {

  
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginRight: 20, // Adjust the margin as needed
  },
  buttonText: {
    color: "#303841",
    fontWeight: "NORMAL",
    fontSize: 14,
  },
});

export default SignupScreen;
