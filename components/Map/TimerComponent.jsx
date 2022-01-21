import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TimerComponent = () => {
  const [counter, setCounter] = useState(0);
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60 >=0 && counter % 60 <= 9 ? "0"+counter%60 : counter%60;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second seconds!");
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.info, fontSize: 18, left: -10 }}>Time:</Text>
      <View style={{ ...styles.wrapper, flexDirection: "row" }}>
        <FontAwesome5 name="clock" size={38} />
        <Text style={{...styles.info, top: -8, marginHorizontal: 10}}>
          {minutes}:{seconds} 
        </Text>
      </View>
    </View>
  );
};

export default TimerComponent;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 30,
    width: 150,
    left: -10,
  },
  info: {
    fontFamily: "Raleway_400Regular",
    fontSize: 38,
    // textAlign: "center"
  },
});
