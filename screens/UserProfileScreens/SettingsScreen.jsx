import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SettingsComponent from "../../components/SettingsComponents/SettingsComponent";
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
import { useAuth } from "../../context/authContext";

const { height, width } = Dimensions.get("window");




const SettingsScreen = (props) => {

  const navigation = useNavigation();
  const {logOut} = useAuth();

  

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

      <SettingsComponent iconName={"file"} subtitleTextContent={"Miscellaneous"} 
        isSwitchOne={true} isSwitchTwo={false}
        optionTextContentOne={"Dark Mode"} optionTextContentTwo={"Logout"} 
        style={styles.settingOneComponentStyle} onPressTwo={logOut()}/>
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
    justifyContent: "center",
    alignSelf: "flex-start",
    top: "9%",
    left: "7%",
  },


});
