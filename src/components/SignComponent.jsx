import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const SignComponent = () => {
  return (
    <View>
      <Text>Login</Text>
      <View style={styles.textInput}>
        <TextInput placeholder="example@gmail.com"></TextInput>
      </View>
    </View>
  );
};

export default SignComponent;

const styles = StyleSheet.create({
    textInput: {
        justifyContent: "center",
        alignContent: "center",
        width: "87%",
        height: "40%",
        backgroundColor: "#FFFFFF"
    
    }
});
