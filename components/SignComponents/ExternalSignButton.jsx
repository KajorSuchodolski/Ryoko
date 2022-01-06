import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";

const ExternalSignButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.touchable}>
      <LinearGradient
        style={styles.container}
        colors={props.colors}
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.container}
      >
        <FontAwesome
          name={props.name}
          size={34}
          color="white"
          style={{top: "3%"}}
        />
        <Text style={{fontFamily: "Raleway_700Bold", fontSize: 22, color: "white", padding: 10}}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ExternalSignButton;

const styles = StyleSheet.create({
  touchable: {
    /*  SHADOW */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    width: 300,
    marginVertical: 20,
    marginHorizontal: 15,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 15,
    textAlign: "center",
  },
});
