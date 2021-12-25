import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import SignInScreen from "./screens/SignScreens/SignInScreen";
import SignUpScreen from "./screens/SignScreens/SignUpScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import { useFonts, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  
  });

  if(!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Log in" component={SignInScreen} />
        <Stack.Screen options={{headerLeft: null}} name="User Profile" component={UserProfileScreen} />
        <Stack.Screen options={{headerShown: false}} name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );bh 
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});


