import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Dimensions } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const SignScreen = () => {
  return (
    <LinearGradient
      colors={["#FFDD00", "#FBB034"]}
      style={styles.linearGradient}
    >
        <View style={styles.logoContainer}>
            <Image 
            style={styles.ryokoLogo}
            source={require("../images/logo.png")}/>
        </View>
    </LinearGradient>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   
  },

  logoContainer: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute"
  },

  ryokoLogo: {
      width: 350,
      height: 200,
      position: "absolute",
  }
});
