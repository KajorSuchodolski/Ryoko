import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

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

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.settingsComponent}>
      <Text style={styles.title}>{props.optionTextContent}</Text>
      <View style={styles.switchOrIcon}>
        {props.isSwitch ? <Switch value={isSwitchOn} color="white" onValueChange={onToggleSwitch} style={styles.switch}/> : (<TouchableOpacity><FontAwesome
            name="angle-right"
            size={33}></FontAwesome></TouchableOpacity>)}
        </View>
    </View>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  settingsComponent: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-between",
  },
  
  title: {
    fontSize: 19,
    fontFamily: "Raleway_400Regular",
    },

  switch: {
    bottom: "16%",
    left: "30%",
  },

  switchOrIcon: {
    paddingLeft: "43%",
  }
});
