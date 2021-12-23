import React from "react";
import SignComponent from "../components/SignComponent";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

const SignInContainer = (props) => {
  return (
    <View style={styles.signInContainter}>
      <SignComponent
        label="Login"
        fontName="user"
        placeHolder="example@gmail.com"
        secureTextEntry={false}
        value={email}
        onChangeText={props.onChangeEmail}
      />
      <SignComponent
        label="Password"
        fontName="key"
        placeHolder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={props.onChangePassword}
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
