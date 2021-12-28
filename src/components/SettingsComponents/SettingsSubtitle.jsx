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

const SettingsSubtitle  = (props) => {

  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.settingSubtitleStyle}>
      <FontAwesome
            name={props.iconName}
            size={30}
      ></FontAwesome>
      <Text style={styles.titleStyle}>{props.subtitleTextContent}</Text>
      
    </View>
  );
};

export default SettingsSubtitle;

const styles = StyleSheet.create({
  settingSubtitleStyle: {
    flexDirection: "row",
    },

  titleStyle: {
    fontSize: 24,
    fontFamily: "Raleway_400Regular",
    paddingLeft: "4%",
    },
});
