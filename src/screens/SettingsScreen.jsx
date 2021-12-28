import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SettingsComponent from "../components/SettingsComponents/SettingsComponent";
import { Switch } from 'react-native-paper';
import { useNavigation } from "@react-navigation/core";


import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("User logged out succesfully!");
      navigation.navigate("Log in");
    })
    .catch((error) => console.log(error));
};


const SettingsScreen = (props) => {

  const navigation = useNavigation();

  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#ffdd00", "#eaa923"]}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.linearGradient}
    >
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <FontAwesome
            name="arrow-left"
            size={33}
            style={styles.arrow}
        ></FontAwesome>
   </TouchableWithoutFeedback>
   <Text style={styles.settingsMainTitle}>
       Settings
   </Text>    
   <View style={styles.settingsComponentsStyle}>
      <SettingsComponent iconName={"user"} subtitleTextContent={"Account"} 

        isSwitchOne={false} isSwitchTwo={false}
        optionTextContentOne={"Edit Profile"}
        optionTextContentTwo={"Change password"} style={styles.settingOneComponentStyle}/>

      <SettingsComponent iconName={"volume-up"} subtitleTextContent={"Sounds and vibration"} 

        isSwitchOne={true} isSwitchTwo={true}
        optionTextContentOne={"App sounds"} optionTextContentTwo={"App vibration"} 
        style={styles.settingOneComponentStyle}/>

      <SettingsComponent iconName={"volume-up"} subtitleTextContent={"Miscellaneous"} 
        isSwitchOne={true} isSwitchTwo={false}
        optionTextContentOne={"Dark Mode"} optionTextContentTwo={"Logout"} 
        style={styles.settingOneComponentStyle}/>
   </View>
  </LinearGradient>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: height,
  },

  arrow: {
    alignSelf: "flex-start",
    top: "7%",
    left: "7%",
  },

  settingsMainTitle: {
    alignSelf: "flex-start",
    fontSize: 48,
    top: "7%",
    left: "7%",

    fontFamily: "Raleway_400Regular",
    fontWeight: "bold",
  },

  settingsComponentsStyle: {
    alignSelf: "flex-start",
    top: "10%",
    left: "7%",
  },


});
