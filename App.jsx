import React from "react";
import { StyleSheet, LogBox } from "react-native";

import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

import { Router } from "./components/Router/Router";
import { AuthProvider } from "./context/authContext";

const App = () => {

  LogBox.ignoreLogs(['Setting a timer']);
  
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
