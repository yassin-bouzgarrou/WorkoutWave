import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect,useCallback } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Toggle from "react-native-toggle-element";



SplashScreen.preventAutoHideAsync();

const WeightInfoScreen = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [fontsLoaded,fontError] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FCFCFC", marginTop: 50 }}
      onLayout={onLayoutRootView}
    >
      <View
        style={{ textAlign: "right", display: "flex", alignItems: "center" , justifyContent:"center" }}
      >
        <Toggle
          value={toggleValue}
          onPress={(newState) => setToggleValue(newState)}
          leftTitle="LBS"
          rightTitle="KG"
          trackBar={{
            activeBackgroundColor: "black",
            inActiveBackgroundColor: "black",
            borderActiveColor: "black",
            borderInActiveColor: "balck",
            borderWidth: 2,
            width: 80,
            height: 30,
          }}
          thumbButton={{
            width: 40,
            height: 40,
            radius: 30,
            inActiveBackgroundColor:"white",
            activeBackgroundColor:"grey"
          }}
        />
      </View>

      <View style={{ paddingTop: 70, paddingHorizontal: 30, marginTop: 10 }}>
        <View style={{ marginVertical: 20 , gap:30}}>
          <Text
            style={{
              color: "black",
              fontSize: 39,

              width: 550,
              fontFamily: "BebasNeue",
            }}
          >
            {" "}
            1- How much do you weight?
          </Text>
          <View  style={{marginTop:-20}} >
          <Input placeholder="87kg"/>
          </View>
       
          <Text
            style={{
              color: "black",
              fontSize: 39,

              width: 550,
              fontFamily: "BebasNeue",
            }}
          >
            {" "}
            2- What's your goal weight?
          </Text>


          <View  style={{marginTop:-30}} >
          <Input placeholder=" 70kg" />
          </View>
          <Text
            style={{
              color: "black",
              fontSize: 39,

              width: 550,
              fontFamily: "BebasNeue",
            }}
          >
            {" "}
            3- How much do you Height?
          </Text>
       

          <View  style={{marginTop:-30}} >
          <Input placeholder="85cm" />
          </View>

          <View className=" -mt-2">
            <Button title="NEXT STEP" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  buttonText: {
    color: "#303841",
    fontWeight: "NORMAL",
    fontSize: 14,
  },
});

export default WeightInfoScreen;
