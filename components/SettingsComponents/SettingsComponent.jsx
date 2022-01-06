import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SettingsSubtitle from "./SettingsSubtitle";
import SettingsOption from "./SettingsOption";

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const SettingsComponent  = (props) => {

  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
  });

  if(!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.settingComponent}>
        <SettingsSubtitle iconName={props.iconName} subtitleTextContent={props.subtitleTextContent} style={styles.title}/>
        <View style={styles.line}/>
        <View style={styles.settingOptions}>
        
          <SettingsOption isSwitch={props.isSwitchOne} optionTextContent={props.optionTextContentOne}/>
          <SettingsOption isSwitch={props.isSwitchTwo} optionTextContent={props.optionTextContentTwo} onPress={props.onPressTwo}/>
        </View>
   </View>
  );
};

export default SettingsComponent;

const styles = StyleSheet.create({
  settingComponent: {
    left: "1%",
    justifyContent: "flex-start",
    alignContent: "center",
    marginBottom: 12,
    },
   
  line: {
    borderBottomColor: '#242526',
    borderBottomWidth: 1,
    marginVertical: "4%",
  },
});
