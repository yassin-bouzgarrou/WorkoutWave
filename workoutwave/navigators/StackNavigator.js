
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from '../Screens/HomeScreen';
import GetStarted from '../Screens/GetStarted';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import OtpSecreen from '../Screens/OtpSecreen';
import ProfileScreen from "../Screens/ProfileScreen"
import SelectCategoryScreen from '../Screens/SelectCategoryScreen';
import WeightInfoScreen from "../Screens/WeightInfoScreen.js"
import WorkoutExerc from "../Screens/WorkoutExerc.js"
import AgeScreen from '../Screens/AgeScreen.js';
import GoalScreen from "../Screens/GoalScreen.js"
import ForgetPasswordScreen from "../Screens/ForgetPasswordScreen.js"
import GoalWeightScreen from "../Screens/GoalWeightScreen.js"

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:"#fffffffff",
            position: "absolute",
            bottom:0,
            left:0,
            right:0,
            elevation:5
          
        }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
                <Ionicons name="person" size={24} color="black" />
            ) : (
                <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={WorkoutExerc}
        options={{
          tabBarLabel: "Ho",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="dumbbell" size={25} color="black" />
            ) : (
              <MaterialCommunityIcons name="dumbbell" size={25} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}



const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator
       initialRouteName="Started" 
       screenOptions={{
        headerShown: false,
      }}>
        
   <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    <Stack.Screen name="OTP" component={OtpSecreen} />
    <Stack.Screen name="Started" component={GetStarted}  />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SelectCategoryScreen" component={SelectCategoryScreen} />
    <Stack.Screen name="GoalScreen" component={GoalScreen} />
    <Stack.Screen name="WorkoutExerc" component={WorkoutExerc} />
    <Stack.Screen name="GoalWeightScreen" component={GoalWeightScreen} />
    <Stack.Screen name="WeightInfoScreen" component={WeightInfoScreen} />
    <Stack.Screen  name="AgeScreen" component={AgeScreen}    />          

  </Stack.Navigator>
  </NavigationContainer>
  )
}


export default StackNavigator


