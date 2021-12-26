import React, { useState, useEffect } from "react";
import SignComponent from "../../components/SignComponents/SignComponent";
import SignButton from "../../components/SignComponents/SignButton";

import { auth } from "../../config/firebase";
import { useNavigation } from "@react-navigation/core";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Link,
} from "react-native";
import { Dimensions } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import {
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import ExternalSignButton from "../../components/SignComponents/ExternalSignButton";
import socialMediaAuth from "../../service/socialMediaAuth";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../../config/authMethods";
import * as Google from "expo-google-app-auth";

const { height, width } = Dimensions.get("window");

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("User Profile");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleGoogleSign = () => {
    const config = {
      androidClientId:
        "471734118607-7blh280q97ntekappsbjr43liu26ftm4.apps.googleusercontent.com",
      scope: ["profile", "email"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const {type, user} = result;
        
        if(type === 'success') {
          const {email, name, photoUrl} = user;
          console.log('Logged in with: ', user);
          setTimeout(() => navigation.navigate("User Profile"));
        }
      })
      .catch((error) => alert(error.message));
  };

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
          source={require("../../assets/images/logo.png")}
        />
        <View style={styles.signInContainer}>
          <SignComponent
            label="Email"
            fontName="envelope"
            placeHolder="example@gmail.com"
            secureTextEntry={false}
            input={email}
            onChangeText={(text) => setEmail(text)}
          />
          <SignComponent
            label="Password"
            fontName="key"
            placeHolder="password"
            secureTextEntry={true}
            input={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.footerContainer}>
          <SignButton text="Sign In" onPress={handleLogin} />
          <Text style={{ fontFamily: "Raleway_400Regular", fontSize: 17 }}>
            - or sign in with -
          </Text>
        </View>
        <View style={styles.otherOptionsContainer}>
          <ExternalSignButton name="facebook" colors={["#0575E6", "#021B79"]} />
          <ExternalSignButton
            onPress={() => {
              handleGoogleSign();
              console.log("clicked");
            }}
            name="google"
            colors={["#ED213A", "#93291E"]}
          />
          <ExternalSignButton name="github" colors={["#0099F7", "#F11712"]} />
        </View>
        <Text
          style={{ fontFamily: "Raleway_400Regular", fontSize: 19, top: "-5%" }}
        >
          Don't have an account?
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Sign Up")}
          >
            <Text style={{ fontFamily: "Raleway_700Bold", fontSize: 19 }}>
              {" "}
              Sign Up{" "}
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  ryokoLogo: {
    flex: 1.45,
    width: "100%",
    height: "30%",
    top: "4%",
    left: "2%",
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: height,
  },
  signInContainer: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignContent: "stretch",
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otherOptionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top: "-5%",
  },
});
