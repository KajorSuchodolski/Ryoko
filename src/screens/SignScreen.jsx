import React, {useState, useEffect} from "react";
import SignInContainer from "../containers/SignInContainer";
import SignButton from "../components/SignButton";
import { auth } from '../firebase/firebase';

import { useNavigation } from '@react-navigation/core'

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("UserProfileScreen")
      }
    })

    return unsubscribe
}, [])

const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
}

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
        <SignInContainer onChangePassword={text => setPassword(text)} onChangeEmail={text => setEmail(text)}/>
        <SignButton onPress={handleLogin} />
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
