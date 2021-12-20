import React from "react";
import SignComponent from "../components/SignComponent";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

const SignInContainer = () => {
  return (
    <View style={styles.signInContainter}>
      <SignComponent
        label="Login"
        fontName="user"
        placeHolder="example@gmail.com"
        secureTextEntry={false}
      />
      <SignComponent
        label="Password"
        fontName="key"
        placeHolder="password"
        secureTextEntry={true}
      />
    </View>
  );
};

export default SignInContainer;

const styles = StyleSheet.create({
  signInContainter: {
    justifyContent: "center",
    alignContent: "center",
    height: height * 0.38,
    top: "7%",
    color: "white",
    // backgroundColor: "black"
  },
});
