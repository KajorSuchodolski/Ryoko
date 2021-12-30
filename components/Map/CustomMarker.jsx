import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export const CustomMarker = () => {
  return (
    <View>
      <FontAwesome size={50} name="map-marker" color="orange"></FontAwesome>
    </View>
  );
};
