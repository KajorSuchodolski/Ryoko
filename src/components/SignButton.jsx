import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SignButton = () => {
  return (
    <TouchableOpacity style={styles.signButton}>
      <Text style={styles.text}>Sign In</Text>
      <FontAwesome 
          name="angle-right"
          size={0.48 * height}
          style={{position: "absolute", top: "25%", left: "8%", color: "white"}} />
    </TouchableOpacity>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  signButton: {
    justifyContent: "center",
    backgroundColor: "black",
    top: "10%",
    borderRadius: 360,
    height: 61,
    width: "46%",
    top: "16%"
  },
  text: {
    color: "white",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
    top: "-5%",
    left: "26%"
  },
});
