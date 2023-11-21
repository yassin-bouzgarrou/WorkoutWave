import {
  View,
  Text,
  TextInput,
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
import { Ionicons } from '@expo/vector-icons'; 

const OtpSecreen = () => {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < newOtp.length - 1) {
      this.inputs[index + 1].focus();
    }
  };
  const inputs = [];
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <Ionicons name="arrow-back" size={24} color="black" style={{marginTop:48, marginLeft:10}} />
      <View style={{ paddingTop: 70, paddingHorizontal: 30, marginTop: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 39,

            width: 550,
            fontFamily: "BebasNeue",
          }}
        >
          FORGET PASSWORD
        </Text>

        <Text
          style={{
            color: "#3A4750",
            fontSize: 16,

            marginTop: -1,
            marginBottom: 60,
            width: 340,
            fontWeight: "300",
          }}
        >
        Verify your account by entering verification
code we sent to johnwe****@****.com
        </Text>
        <View style={styles.container}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.box}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleOtpChange(value, index)}
              value={digit}
              ref={(input) => {
                inputs[index] = input;
              }}
            />
          ))}
        </View>
        <View style={{ marginVertical: 0}}>
     
          <View>
        
             
              <Text
                style={{ fontWeight: "300", textDecorationLine: "underline" ,textAlign:"center" }}
              >
                Resend
              </Text>
      
          </View>

          <View className=" mt-[50px]">
            <Button title="REST PASSWORD" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 1,
    borderColor: "black",
    width: 50,
    height: 50,
    margin: 13,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,
  },
});

export default OtpSecreen;
