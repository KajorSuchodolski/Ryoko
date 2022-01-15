import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
<<<<<<< HEAD:components/SettingsComponents/SettingsOption.jsx
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IsDarkModeOn } from '../../Context';

>>>>>>> origin/kajav2:src/components/SettingsComponents/SettingsOption.jsx
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { Switch } from 'react-native-paper';


const SettingsOption  = (props) => {

  const darkModeOn = useContext(IsDarkModeOn);  

  return (
    <View style={styles.settingsComponent}>
      <Text style={[styles.title, darkModeOn ? {color : "grey"} : {color : "black"}]}>
        {props.optionTextContent}</Text>
      <View style={styles.switchOrIcon}>
        {props.isSwitch ? <Switch value={props.isSwitchOn} color="white" onValueChange={props.onToggleSwitch} style={styles.switch}/> : 
        (<TouchableOpacity onPress={props.onPressIcon}><FontAwesome
            name="angle-right"
            size={33}
            style={darkModeOn ? {color: "grey"} : {color: "black"}}
            ></FontAwesome></TouchableOpacity>)}
        </View>
    </View>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  settingsComponent: {
    flexDirection: "row",
    // marginTop: "2%",
    justifyContent: "space-between",
  },
  
  title: {
    fontSize: 19,
    fontFamily: "Raleway_400Regular",
    },

  switch: {
    left: "30%",
    top: "-10%"  },

  switchOrIcon: {
    paddingLeft: "43%",
  }
});
