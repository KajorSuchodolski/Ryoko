import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useFonts, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";

import SignScreen from "./screens/SignScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

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
        <Stack.Screen options={{headerShown: false}} name="Log in" component={SignScreen} />
        <Stack.Screen name="User Profile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // W ramach testow odblokowac

    // <SignScreen/> 

    // <UserProfileScreen/>
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


