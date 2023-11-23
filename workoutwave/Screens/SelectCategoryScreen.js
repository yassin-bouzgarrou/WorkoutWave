import { Text, View, Image, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import { useFonts } from "expo-font";
import Button from "../component/Button";
import StreetLog from "../assets/images/StreetLogo.jpg";
import RunningLogo from "../assets/images/RunningLogo.png";
import WalkingLogo from "../assets/images/WalkingLogo.png";
import MealLogo from "../assets/images/MealLogo.jpg";
import CyclingLogo from "../assets/images/CyclingLogo.jpg";
import GymLogo from "../assets/images/GymLogo.jpg";
import { Feather } from "@expo/vector-icons";

const SelectCategoryScreen = () => {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const [selectedRunning, setSelectedRunning] = useState(null);
  const [selectedWalking, setSelectedWalking] = useState(null);
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [selectedCycling, setSelectedCycling] = useState(null);
  const [selectedGym, setSelectedGym] = useState(null);
  const [selectedStreet, setSelectedStreet] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedRunning((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleCategoryWalking = (category) => {
    setSelectedWalking((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  const handleCategoryStreet = (category) => {
    setSelectedStreet((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  const handleCategoryPlan = (category) => {
    setSelectedMealPlan((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  const handleCategoryCycling = (category) => {
    setSelectedCycling((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  const handleCategoryGYM = (category) => {
    setSelectedGym((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  return (
    <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
      <Text
        style={{
          position: "absolute",
          top: 35,
          marginLeft: 8,
          fontSize: 13,
          color: "#19191",
          fontWeight: "400",
        }}
      >
        Step 1 of 8
      </Text>
      <Text className="text-right font-bold  -mr-4 mt-5 text-[15px]">Skip</Text>
      <Text
        style={{
          color: "black",
          marginTop: 30,
          fontSize: 35,
          textAlign: "center",
          fontFamily: "BebasNeue",
          marginBottom: 20,
        }}
      >
        SELECT YOUR FAVOURITE
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: 15 }}>
        <TouchableOpacity
          style={{ width: "50%", padding: 10, marginTop: 10 }}
          onPress={() => handleCategorySelect("Running")}
        >
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 100,
              opacity: selectedRunning === "Running" ? 0.5 : 9999,
            }}
            source={RunningLogo}
          />
          {selectedRunning && (
            <Feather
              name="check-circle"
              size={18}
              color="black"
              style={{ position: "absolute", left: 105, top: 150 }}
            />
          )}
          <Text style={{ marginLeft: 40, marginTop: 10 }}>Running</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "50%", padding: 10, paddingLeft: 30, marginTop: 10 }}
          onPress={() => handleCategoryWalking("Walking")}
        >
          <Image
            style={{ width: 130, height: 130, borderRadius: 100 ,     opacity: selectedWalking  ? 0.5 : 9999,}}
            source={WalkingLogo}
            
          />
          {selectedWalking && (
            <Feather
              name="check-circle"
              size={17.5}
              color="black"
              style={{ position: "absolute", left: 122.2, top: 152 }}
            />
          )}
          <Text style={{ marginBottom: 50, marginLeft: 40, marginTop: 10 }}>
            Walking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "50%", padding: 10, marginTop: -38 ,     opacity: selectedMealPlan ? 0.5 : 9999,}}
          onPress={() => handleCategoryPlan("plan")}
        >
          <Image
            style={{ width: 130, height: 130, borderRadius: 100 }}
            source={MealLogo}
          />
          { selectedMealPlan && 
            <Feather
              name="check-circle"
              size={17.5}
              color="black"
              style={{ position: "absolute", left: 114, top: 150 }}
            />
          }
          <Text style={{ marginBottom: 50, marginLeft: 40, marginTop: 10 }}>
            Meal plan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "50%", padding: 10, paddingLeft: 30, marginTop: -38,     opacity: selectedCycling ? 0.5 : 9999 }}
          onPress={()=> handleCategoryCycling("Meal plan")}
        >
          <Image
            style={{ width: 130, height: 130, borderRadius: 100 }}
            source={CyclingLogo}
          />
          {selectedCycling && (
            <Feather
              name="check-circle"
              size={17.5}
              color="black"
              style={{ position: "absolute", left: 119, top: 150 }}
            />
          )}
          <Text style={{ marginLeft: 40, marginTop: 10 }}>Cycling</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "50%", padding: 10, marginTop: -30,  opacity: selectedGym ? 0.5 : 9999  }}      onPress={()=> handleCategoryGYM("Gym")}>
          <Image
            style={{ width: 130, height: 130, borderRadius: 100 }}
            source={GymLogo}
       
          />
          {selectedGym && (
            <Feather
              name="check-circle"
              size={17.5}
              color="black"
              style={{ position: "absolute", left: 83, top: 150 }}
            />
          )}
          <Text style={{ marginLeft: 40, marginTop: 10 }}>Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "50%", padding: 10, paddingLeft: 30, marginTop: -30,  opacity: selectedStreet ? 0.5 : 9999 }}
          onPress={()=> handleCategoryStreet("Street")}
          
        >
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 100,
              paddingTop: 50,
            }}
            source={StreetLog}
          />
          <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 12 }}>
            Street Workout
          </Text>
          {selectedStreet && (
            <Feather
              name="check-circle"
              size={17.5}
              color="black"
              style={{ position: "absolute", left: 143, top: 148 }}
            />
          )}
        </TouchableOpacity>
      </View>
      <Button title="Next Steps"></Button>
    </View>
  );
};

export default SelectCategoryScreen;
