import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const SignComponent = (props) => {

  const [isSecureEntry, setSecureEntry] = useState(props.secureTextEntry);
  const [eyeName, setEyeName] = useState("eye");

  return (
    <View style={styles.signComponent}>
      <Text style={styles.labelTextInput}>{props.label}</Text>
      <View style={styles.textInputBox}>
        <FontAwesome
          name={props.fontName}
          size={0.04 * height}
          style={{ position: "absolute", top: "25%", left: "8%" }}
        />
        <TextInput
          {...props}
          placeholder={props.placeHolder}
          style={styles.textInput}
          secureTextEntry={isSecureEntry}
        ></TextInput>
        {props.secureTextEntry && (
          <TouchableOpacity
            style={{ position: "absolute", top: "25%", left: "84%" }}
            onPress={() => {
              setSecureEntry(!isSecureEntry);
              !isSecureEntry ? setEyeName("eye") : setEyeName("eye-slash");
            }}
          >
            <FontAwesome name={eyeName} size={0.04 * height}></FontAwesome>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SignComponent;

const styles = StyleSheet.create({
  signComponent: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },

  labelTextInput: {
    fontSize: 20,
    left: "6%",
    fontFamily: "Raleway_400Regular",
    paddingBottom: 0.01 * height,
  },

  textInputBox: {
    alignContent: "center",
    width: 350,
    height: height * 0.08,
    backgroundColor: "#FFFFFF",
    borderRadius: 360,

    /*  SHADOW */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 80,
    flexDirection: "row",
  },

  textInput: {
    width: "100%",
    fontFamily: "Raleway_400Regular",
    fontSize: 18,
    top: "-0.5%",
    left: "150%",
  },
  
});
