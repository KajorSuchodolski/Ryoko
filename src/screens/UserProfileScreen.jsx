import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import GoogleMap from "../components/Map/GoogleMap";
import { Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Image } from "react-native";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { auth } from "../service/firebase/firebase";
import { useNavigation } from "@react-navigation/core";

const { height, width } = Dimensions.get("window");

const UserProfileScreen = (props) => {
  let isDarkMode = props.isDarkMode ? true : false;
  const [switchValue, setSwitchValue] = useState(false);
  const navigation = useNavigation();

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User logged out succesfully!");
        navigation.navigate("Log in");
      })
      .catch((error) => console.log(error));
  };


  return (
    <View style={styles.container}>
      <GoogleMap darkMode={isDarkMode} />
      <LinearGradient
        colors={isDarkMode ? ["#121212", "#121212"] : ["#FFFFFF", "#FFFFFF"]}
        style={styles.footer}
      >
        <TouchableOpacity style={{ left: "38%" }}>
          <View style={styles.footerBtn}>
            <Image
              source={require("../assets/images/pulse.png")}
              style={{ height: 50, width: 50 }}
              tintColor={props.isDarkMode ? "#F5F6F7" : "black"}
            ></Image>
            <Text
              style={isDarkMode ? { color: "#F5F6F7" } : { color: "black" }}
            >
              Activity
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <LinearGradient colors={["#ffdd00", "#eaa923"]} style={styles.addBtn}>
            <FontAwesome5
              name="plus"
              size={55}
              style={{ left: "26%" }}
            ></FontAwesome5>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={{ left: "-30%" }} onPress={logOut}>
          <View style={styles.footerBtn}>
            <Image
              source={require("../assets/images/cog.png")}
              style={{ height: 50, width: 50 }}
              tintColor={props.isDarkMode ? "#F5F6F7" : "black"}
            ></Image>
            <Text
              style={isDarkMode ? { color: "#F5F6F7" } : { color: "black" }}
            >
              Settings
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    width: width * 1.06,
    height: "12%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 12,

    elevation: 24,
  },
  footerBtn: {
    top: "10%",
    tintColor: "white",
    fontFamily: "Raleway_400Regular",
  },
  addBtn: {
    height: 100,
    width: 100,
    borderRadius: 360,
    top: "-12%",
    textAlign: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.57,
    shadowRadius: 7.49,

    elevation: 16,
  },
});
