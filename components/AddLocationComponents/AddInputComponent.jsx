import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default AddInputComponent = (props) => {
  
    return (
    <View style={{paddingLeft: "7%", paddingBottom: "2%"}}>
      <Text style={styles.labelTextInput}>
        <FontAwesome name={props.fontName} size={24}></FontAwesome>
        {"  "}
        {props.name}
      </Text>
      <View style={styles.textInputBox}>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  labelTextInput: {
    fontSize: 24,
    left: "6%",
    fontFamily: "Raleway_400Regular",
    paddingBottom: 0.01 * height,
    width: 200,
  },

  textInputBox: {
    justifyContent: "center",
    width: 350,
    height: height * 0.08,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 360,
  },

  textInput: {
    width: "84%",
    fontFamily: "Raleway_400Regular",
    fontSize: 24,
    left: "9%",
  },
});
