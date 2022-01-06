import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";

export default LocationInfoScreen = ({route}) => {
  const navigation = useNavigation();

  const {imageUrl, title, description} = route.params;

  return (
    <LinearGradient
      colors={["#ffdd00", "#eaa923"]}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.linearGradient}
    >
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("User Profile");
          }}
        >
          <FontAwesome name="arrow-left" size={40} style={{ left: "-40%" }} />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Image
          style={styles.image}
          source={{uri: imageUrl}}
        ></Image>
      </View>
      <View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
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
