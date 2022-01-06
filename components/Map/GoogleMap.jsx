import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MapStyleLight, MapStyleDark, googleMapStyle } from "./mapStyles";
import * as Location from "expo-location";
import { GetLocation } from "react-native-get-location";
import * as PermissionsAndroid from "expo-permissions";
import { CustomMarker } from "./CustomMarker";
import { addLocations, getLocations } from "../../api/LocationApi";
import { Callout } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../context/authContext";
import { useNavigation } from "@react-navigation/core";

const GoogleMap = (props) => {
  const [location, setLocation] = useState({});
  const [markers, setMarkers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { signOut, currentUser } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        signOut();
        navigation.navigate("Sign In");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    };
    console.log("Pożeram Ci kase skurwysynie haha");
    getLocations()
      .then((data) => setMarkers(data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        userLocationUpdateInterval={100}
        loadingEnabled={true}
        customMapStyle={props.darkMode ? MapStyleDark : MapStyleLight}
      >
        {markers.map((marker) => (
          <Marker
            description={marker.description}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            key={marker.id}
          >
            <CustomMarker />
            <Callout
              onPress={() => {
                console.log(currentUser.email);
                navigation.navigate("Location Info", {
                  title: marker.title,
                  description: marker.description,
                  imageUrl: marker.imageUrl,
                });
              }}
              tooltip
            >
              <View>
                <LinearGradient
                  colors={["#ffdd00", "#eaa923"]}
                  style={styles.callout}
                >
                  <Text style={styles.name}>{marker.title}</Text>
                  <Text
                    style={{
                      justifyContent: "center",
                      position: "absolute",
                      left: "10%",
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: marker.imageUrl }}
                      resizeMode="cover"
                    />
                  </Text>
                </LinearGradient>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 50,
    marginBottom: 0,
  },
  callout: {
    // left: "25%",
    flexDirection: "column",
    alignSelf: "flex-start",
    borderRadius: 16,
    width: 200,
    height: 140,
  },
  // arrow: {
  //   backgroundColor: "transparent",
  //   borderColor: "black",
  //   borderTopColor: "transparent",
  //   borderWidth: 13,
  //   alignSelf: "center",
  //   position: "absolute",
  //   top: -32,
  // },
  // arrowBorder: {
  //   backgroundColor: "transparent",
  //   borderColor: "transparent",
  //   borderTopColor: "transparent",
  //   borderWidth: 16,
  //   alignSelf: "center",
  //   marginTop: -0.5,
  //   marginBottom: -15,
  // },
  name: {
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    textAlign: "center",
    flexDirection: "row",
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "grey",

    // top: 10
  },
  // Character image
  image: {
    width: 160,
    height: 130,
    // left: 25
    paddingBottom: 20,
  },
});
