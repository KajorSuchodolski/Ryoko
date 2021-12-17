import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  borderBottomColor,
  borderColor,
  borderTopColor,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import SignScreen from "./screens/SignScreen";

const { height, width } = Dimensions.get("window");

const App = () => {
  return (
    <SignScreen/>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  }
});


