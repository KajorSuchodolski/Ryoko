import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MapStyleLight, MapStyleDark, googleMapStyle } from "./mapStyles";
import * as Location from "expo-location";
import { GetLocation } from "react-native-get-location";
import * as PermissionsAndroid from "expo-permissions";
import { CustomMarker } from "./CustomMarker";
import { getLocations } from "../../api/LocationApi";

const GoogleMap = (props) => {
  const [location, setLocation] = useState({});

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })
    };
    console.log("Pożeram Ci kase skurwysynie haha");
    getLocations()
      .then((data) => setMarkers(data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 23,
          longitude: 23,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        userLocationUpdateInterval={100}
        loadingEnabled={true}
        customMapStyle={props.darkMode ? MapStyleDark : MapStyleLight}
      >
        {markers.map((coords) => (
          <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <CustomMarker />
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
    height: Dimensions.get("window").height,
    zIndex: -1,
    marginBottom: 0,
  },
});
