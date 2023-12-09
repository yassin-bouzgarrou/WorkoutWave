import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Button from "../component/Button";
import { useFonts } from "expo-font";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../utils/ResponsiveUtil";
import { Ionicons } from "@expo/vector-icons";

const ages = Array.from({ length: 43 }, (_, index) => index + 18);

export default function AgeScreen() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const [selectedItem, setSelectedItem] = useState(22);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <View
        style={{
          display: "flex",
        }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={{ marginTop: 40, marginLeft: 10 }}
        />
        <View>
          <Text
            style={{
              textAlign: "right",
              marginTop: -15,
              fontSize: 13,
              marginRight: 10,
              fontWeight:"bold"
            }}
          >
            Skip
          </Text>
        </View>
      </View>

      <View style={{marginTop:25 ,marginLeft:7}}>
        <Text>Step 3 of 8</Text>
        <Text style={{fontSize:38 , fontFamily:"BebasNeue",marginBottom:70}}>HOW OLD ARE YOU?</Text>
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          height: 99,
        }}
      >
        <FlatList
          data={ages}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginVertical: 15,
                borderRadius: 10,
                backgroundColor:
                  selectedItem === item ? "black" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 28,

                  color: selectedItem === item ? "white" : "black",

                  padding: 5,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onPress={() => setSelectedItem(item)}
              >
                {item + 1}
              </Text>
            </View>
          )}
        />
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <Button title="Next Steps" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
