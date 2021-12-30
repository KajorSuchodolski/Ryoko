import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import AddInputComponent from "../../components/AddLocationComponents/AddInputComponent";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addLocations } from "../../api/LocationApi";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

export default AddLocationScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#ffdd00", "#eaa923"]}
        start={{ x: "55%", y: "55%" }}
        end={{ x: "100%", y: "100%" }}
      >
        <Text style={styles.headerText}>Add location</Text>
      </LinearGradient>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("User Profile")}
      >
        <FontAwesome
          name="arrow-left"
          size={26}
          style={styles.arrow}
        ></FontAwesome>
      </TouchableWithoutFeedback>
      <View style={styles.photoContainer}>
        <View
          style={{
            ...styles.photo,
            width: 330,
            height: 180,
            transform: [{ rotate: "-13deg" }],
          }}
        >
          <View
            style={{
              ...styles.photo,
              width: 180,
              height: 330,
              top: -90,
              left: 80,
              transform: [{ rotate: "-77deg" }],
            }}
          >
            <View style={styles.imagePicker}></View>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <AddInputComponent
          name="Title"
          fontName="flag"
          placeholder="eg. Eiffel Tower"
          input={title}
          onChangeText={(text) => setTitle(text)}
        />
        <AddInputComponent
          name="Description"
          fontName="pencil"
          placeholder="eg. Very beautiful"
          input={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TouchableOpacity onPress={() => addLocations(title, description)}>
          <View style={styles.addButton}>
            <FontAwesome
              name="angle-right"
              size={80}
              style={{ top: "-10%", left: "5%" }}
              color="white"
            ></FontAwesome>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: "80%",
    width: "100%",
    borderRadius: 720,
    justifyContent: "center",
    alignContent: "center",
    top: "-62%",
    transform: [{ scaleX: 1.6 }],
  },
  headerText: {
    fontSize: 45,
    fontFamily: "Raleway_700Bold",
    top: "37%",
    textAlign: "center",
    transform: [{ scaleX: 0.6 }],
  },
  photoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: "-51%",
  },
  photo: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  arrow: {
    top: "-64%",
    left: "5%",
  },

  imagePicker: {
    width: "50%",
    height: "75%",

  },

  inputContainer: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    top: "65%",
  },

  labelTextInput: {
    fontSize: 24,
    left: "6%",
    fontFamily: "Raleway_400Regular",
    paddingBottom: 0.01 * height,
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
    width: "50%",
    fontFamily: "Raleway_400Regular",
    fontSize: 24,
    left: "9%",
  },
  addButton: {
    // position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: "black",
    top: "12%",
    left: "80%",
    borderRadius: 100,
  },
});
