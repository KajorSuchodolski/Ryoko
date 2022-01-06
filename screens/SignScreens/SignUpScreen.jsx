import React, { useState } from "react";
import SignComponent from "../../components/SignComponents/SignComponent";
import SignButton from "../../components/SignComponents/SignButton";
import { auth } from "../../config/firebase";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Dimensions } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import ExternalSignButton from "../../components/SignComponents/ExternalSignButton";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";

const { height, width } = Dimensions.get("window");

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation = useNavigation();

  const { googleLogIn, signUp } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#ffdd00", "#eaa923"]}
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.linearGradient}
      >
        <TouchableWithoutFeedback>
          <FontAwesome
            name="arrow-left"
            size={30}
            style={styles.arrow}
            onPress={() => navigation.navigate("Sign In")}
          ></FontAwesome>
        </TouchableWithoutFeedback>
        <View style={styles.signUpContainter}>
          {/* <SignComponent
            label="Login"
            fontName="user"
            placeHolder="UserLogin"
            secureTextEntry={false}
          /> */}
          <SignComponent
            label="Email"
            fontName="envelope"
            placeHolder="example@gmail.com"
            secureTextEntry={false}
            onChangeText={(text) => setEmail(text)}
          />
          <SignComponent
            label="Password"
            fontName="key"
            placeHolder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <SignComponent
            label="Confirm password"
            fontName="key"
            placeHolder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPasswordConfirm(text)}
          />
        </View>
        <View style={styles.footerContainer}>
          <SignButton
            text="Sign Up"
            onPress={() => {
              password === passwordConfirm
                ? signUp(email, password)
                : Alert.alert("Alert", "Passwords don't match!");
            }}
          />
          <Text style={{ fontFamily: "Raleway_400Regular", fontSize: 19 }}>
            - or sign up with -
          </Text>
        </View>
        <View style={styles.otherOptionsContainer}>
          <ExternalSignButton
            name="google"
            onPress={googleLogIn}
            colors={["#ED213A", "#93291E"]}
            text="Sign Up with Google"
          />
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  arrow: {
    alignSelf: "flex-start",
    top: "5%",
    left: "6%",
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: height,
  },
  signUpContainter: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignContent: "stretch",
    top: "7%",
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otherOptionsContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    top: "-24%",
  },
});
