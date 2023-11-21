import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import { useFonts } from 'expo-font';


const ForgetPasswordScreen = () => {

  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#FCFCFC" }}>
    <View style={{ paddingTop: 100, paddingHorizontal: 30, marginTop: 10 }}>
      <Text
        style={{
          color: "black",
          fontSize: 39,

          width: 550,
          fontFamily: 'BebasNeue'
        }}
      >
    FORGET PASSWORD
      </Text>
      <Text
        style={{
          color: "#3A4750",
          fontSize: 16,
    
          marginTop:-1,
          marginBottom:60,
          width: 290,
         fontWeight:"300"

        }}
      >
      Please enter your email below to receive 
your password reset code.
      </Text>
      <View style={{ marginVertical: 78,  }}>
        <Input
        
          label="Email address"
          placeholder="Enter your email address"

        />
         <View > 
        <Text  style={{fontSize:12 , marginTop:-17  , color:"#303841" , marginLeft:10}}>
          You Don't recive any message <Text style={{fontWeight:"bold",   textDecorationLine: "underline"}} >Resend</Text>
        </Text>
      </View>
      
        <View className=" mt-[40px]">
        <Button title="Reset Password"   />
        </View>
  
      
    
    

  </View>
      </View>
    
  </SafeAreaView>
  )
}

export default ForgetPasswordScreen