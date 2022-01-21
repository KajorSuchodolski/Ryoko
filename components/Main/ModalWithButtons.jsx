import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ModalWithButtons = (props) => {
  return (
    <Modal isVisible={props.isVisible} animationIn="fadeIn">
      <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.modal}>
        <Text
          style={{
            fontFamily: "Raleway_700Bold",
            fontSize: 30,
            textAlign: "center",
            padding: 3,
          }}
        >{props.title}
        </Text>
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: 16,
            paddingVertical: 5,
          }}
        >{props.description}
        </Text>
        <View style={styles.modalButtonWrapper}>
          <TouchableOpacity onPress={props.confirm}>
            <View style={styles.modalButton}>
              <FontAwesome5 name="check" size={70} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.cancel}>
            <View style={styles.modalButton}>
              <FontAwesome5 name="times" size={70} color="#cc0000" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.modalButtonWrapper,
            padding: 0,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Raleway_400Regular",
              fontSize: 20,
              marginHorizontal: 60,
              top: -12,
            }}
          >
            Yes
          </Text>
          <Text
            style={{
              fontFamily: "Raleway_400Regular",
              fontSize: 20,
              marginHorizontal: 65,
              top: -12,
            }}
          >
            No
          </Text>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default ModalWithButtons;

const styles = StyleSheet.create({
  modal: {
    // flex: 0.42,
    justifyContent: "center",
    alignItems: "center",
    // width: 350,
    height: 300,
    borderRadius: 40,
    backgroundColor: "white",
  },
  modalButtonWrapper: {
    flexDirection: "row",
    padding: 14,
  },
  modalButton: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginHorizontal: 30,
    elevation: 17,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
