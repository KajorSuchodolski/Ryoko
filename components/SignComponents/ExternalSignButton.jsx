import React from "react";
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const ExternalSignButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.touchable}>
      <LinearGradient style={styles.container}
        colors={props.colors}
        useAngle={true}
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.container}
      >
        <FontAwesome name={props.name} size={40} color="white" style={{left: "22%"}}/>
        

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
      width: 60,
      height: 60,
      marginVertical: 20,
      marginHorizontal: 15,
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 15,

  }
});
