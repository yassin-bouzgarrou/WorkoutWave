import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';



const GetStarted = ({ navigation }) => {
    
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
  });
  AsyncStorage.removeItem('@animationPlayed');
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const spinValue = new Animated.Value(0);

  useEffect(() => {



    const checkIfAnimationPlayed = async () => {
      try {
        const value = await AsyncStorage.getItem('@animationPlayed');
        console.log(value);
        if (value === 'true') {
          setPlayedAnimation(true);
        }
      } catch (error) {
        console.error('Error checking if animation played:', error);
      }
    };


    checkIfAnimationPlayed('@animationPlayed');
    

  }, []);

  useEffect(() => {
    if (!playedAnimation) {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
    
        AsyncStorage.setItem('@animationPlayed', 'true');
        setPlayedAnimation(true);
      });
    }
  }, [playedAnimation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>

      <View style={styles.ellipse}></View>

      <View style={styles.imageContainer}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate: spin }] }]}
          source={require('../assets/images/Staret.jpg')}
        />
      </View>

      <View style={styles.container} className="">
        <Text style={styles.textWithDifferentColor}>
          WORKOUT
          <Text style={styles.differentColorText}>WAVE</Text>
        </Text>
      </View>

      <View>
        <Text className=" w-[250] -mt-[110] bg-center  text-l  text-center">
          the ultimate fitness community that trains togather to be great and fit.
        </Text>
      </View>

      <Pressable style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text} >GetStarted</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipse: {
    position: 'absolute',
    top:198,
    width: 280,
    height: 280,
    backgroundColor: '#B0C929',
    opacity: 0.3,
    filter: 'blur(100px)',
borderRadius:5,
    zIndex: -1,
  },
  text: {
    fontWeight: 'bold',
    marginVertical: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%', // Adjust as needed
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  normalText: {
    fontSize: 30,
    color: 'black',
  },
  textWithDifferentColor: {
    fontSize: 48,
    color: 'black',
 
    fontFamily: 'BebasNeue',
    marginBottom:15
  },
  differentColorText: {
    color: '#B0C929', 
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 110,
   
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: 'white',
  },
});

export default GetStarted;
