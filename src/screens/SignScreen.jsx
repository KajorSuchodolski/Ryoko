import React from "react";
import SignInContainer from "../containers/SignInContainer";

import { StyleSheet, View, Text, Image } from "react-native";
import { Dimensions } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const SignScreen = () => {
  return (
    <LinearGradient
      colors={["#ffdd00", "#eaa923"]}
      useAngle={true}
      angle={45}
      angleCenter={{x:0.5,y:0.5}}
      style={styles.linearGradient}
    >
      <Image style={styles.ryokoLogo} source={require("../assets/images/logo.png")} />
      <SignInContainer/>
    </LinearGradient>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  ryokoLogo: {
    width: "92%",
    height: "26%",
    top: "4%",
    left: "2%",
  },
});
