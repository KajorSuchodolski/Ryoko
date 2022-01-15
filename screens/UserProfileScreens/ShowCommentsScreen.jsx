import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ShowCommentsScreen = ({ route }) => {

  const {imageUrl, title} = route.params;

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#ffdd00", "#eaa923"]} style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <FontAwesome style={styles.arrow} name="arrow-left"></FontAwesome>
        </TouchableWithoutFeedback>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.locationImage}
        ></Image>
        <Text style={styles.locationTitle}>{title}</Text>
      </LinearGradient>
      <ScrollView>
        <View style={styles.commentsWrapper}>
          <View style={styles.commentBox}>
            <View colors={["#ffdd00", "#eaa923"]} style={styles.commentHeader}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1024112175378575360/y47CjJy4_400x400.jpg",
                }}
              ></Image>
              <Text style={styles.nickname}>KajorSuchodolski</Text>
              <FontAwesome name="thumbs-up" style={styles.thumb}></FontAwesome>
            </View>
            <Image
              style={styles.photo}
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/58fbfecf725e25a3d1966494/1617153558938-JPZWR94CWYCRICXG933L/image-asset.jpeg",
              }}
            ></Image>
            <View style={styles.opinionWrapper}>
              <Text style={styles.opinion}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                tempore atque mollitia fugiat quasi ipsum iste vero non corrupti
                expedita.
              </Text>
            </View>
          </View>
          <View style={styles.commentBox}></View>
          <View style={styles.commentBox}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShowCommentsScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: "3%",
  },
  arrow: {
    fontSize: 34,
    left: -10,
    top: 12,
  },
  locationImage: {
    width: 55,
    height: 55,
    borderRadius: 360,
    borderColor: "white",
    borderWidth: 1.75,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 15,
  },
  locationTitle: {
    fontFamily: "Raleway_700Bold",
    fontSize: 18,
    marginTop: 25,
  },
  commentsWrapper: {
    top: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  commentBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "86%",
    marginVertical: "7%",
    borderRadius: 40,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 10,
  },
  commentHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 13,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 360,
    //   borderWidth: 1,
    //   borderColor: "black",
    left: "-50%",
  },
  nickname: {
    fontFamily: "Raleway_700Bold",
    fontSize: 23,
    top: "-1%",
    left: "-30%",
  },
  thumb: {
    fontSize: 28,
    color: "green",
    top: "-1%",
    left: "16%",
  },
  photo: {
    width: "76%",
    height: 160,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  opinionWrapper: {
    width: "76%",
    borderTopWidth: 1,
    borderColor: "grey",
  },
  opinion: {
    fontFamily: "Raleway_400Regular",
    fontSize: 15,
    padding: 10,
  },
});
