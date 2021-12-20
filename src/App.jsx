import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import SignScreen from "./screens/SignScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import { useFonts, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";



const App = () => {
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    /* 
    W ramach testow odblokowac

    <SignScreen/> 

    */

    <UserProfileScreen/>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});


