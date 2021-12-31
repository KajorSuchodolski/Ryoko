import React, { useState, useEffect } from "react";
import { Dimensions, Appearance } from "react-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import SignInScreen from "./screens/SignScreens/SignInScreen";
import SignUpScreen from "./screens/SignScreens/SignUpScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import { useFonts, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { EventListener, EventRegister } from "react-native-event-listeners";

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from "./screens/SettingsScreen";
import AuthChangeScreen from "./screens/AuthChangeScreen";
import { IsDarkModeOn } from './Context';

const Stack = createNativeStackNavigator();


const App = () => {
  const [darkModeOn, setDarkModeOn] = React.useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeDarkTheme",
      (data) => {
        setDarkModeOn(data);      
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    }}
  );


  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <IsDarkModeOn.Provider value={darkModeOn}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Log in" component={SignInScreen} />
          <Stack.Screen options={{headerShown: false}} name="User Profile" component={UserProfileScreen} />
          <Stack.Screen options={{headerShown: false}} name="Sign Up" component={SignUpScreen} />
          <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
          <Stack.Screen options={{headerShown: false}} name="Auth Change" component={AuthChangeScreen} />
        </Stack.Navigator>
      </IsDarkModeOn.Provider>
    </NavigationContainer>
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


