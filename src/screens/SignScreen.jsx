import React from "react";
import SignInContainer from "../containers/SignInContainer";
import SignButton from "../components/SignButton";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Dimensions } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const SignScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#ffdd00", "#eaa923"]}
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.linearGradient}
      >
        <Image
          style={styles.ryokoLogo}
          source={require("../assets/images/logo.png")}
        />
        <SignInContainer />
        <SignButton />
      </LinearGradient>
    </TouchableWithoutFeedback>
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
