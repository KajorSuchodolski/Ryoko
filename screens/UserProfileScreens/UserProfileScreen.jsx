import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import GoogleMap from "../../components/Map/GoogleMap";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { IsDarkModeOn } from "../../context/isDarkModeOn";
import { useAuth } from "../../context/authContext";

const { height, width } = Dimensions.get("window");

const UserProfileScreen = (props) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [modal, setModal] = useState(true);

  const navigation = useNavigation();
  const darkMode = useContext(IsDarkModeOn);
  const {currentUser} = useAuth();

  // const tokyoRegion = {
  //   latitude: 35.6762,
  //   longitude: 139.6503,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // };

  const updateTest = async () => {

    console.log(currentUser);
    currentUser.updateProfile({ryokoNickname: "Radek460"}).then(() => console.log("Nickname changed!")).catch(err => alert(err.message));

  };

  return (
    <View style={styles.container}>
      <GoogleMap darkMode={darkMode}/>
      <LinearGradient
        colors={darkMode ? ["#181818", "#181818"] : ["#FFFFFF", "#FFFFFF"]}
        style={styles.footer}
      >
        <TouchableOpacity style={{ left: "38%" }}>
          <View style={styles.footerBtn}>
            <Image
              source={require("../../assets/images/pulse.png")}
              style={{ height: 50, width: 50 }}
              tintColor={darkMode ? "#B3B3B3" : "black"}
            ></Image>
            <Text style={darkMode ? { color: "#B3B3B3" } : { color: "black" }}>
              Activity
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Add Location")}
        >
          <LinearGradient colors={["#ffdd00", "#eaa923"]} style={styles.addBtn}>
            <FontAwesome5
              name="plus"
              size={55}
              style={{ left: "26%" }}
            ></FontAwesome5>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={{ left: "-30%" }}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.footerBtn}>
            <Image
              source={require("../../assets/images/cog.png")}
              style={{ height: 50, width: 50 }}
              tintColor={darkMode ? "#B3B3B3" : "black"}
            ></Image>
            <Text style={darkMode ? { color: "#B3B3B3" } : { color: "black" }}>
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
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 340,
    height: 450,
    borderRadius: 45,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Raleway_700Bold",
    fontSize: 48,
    paddingTop: 5,
    paddingBottom: 35,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 360,
  },
  description: {
    fontFamily: "Raleway_400Regular",
    fontSize: 17,
    padding: 25,
  },
});
