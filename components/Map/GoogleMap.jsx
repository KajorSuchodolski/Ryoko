import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MapStyleLight, MapStyleDark } from "./mapStyles";
import * as Location from "expo-location";
import { GetLocation } from "react-native-get-location";
import * as PermissionsAndroid from 'expo-permissions';


const GoogleMap = (props) => {
  const [location, setLocation] = useState({
    latitude: 53.088518269829585,
    longitude: 23.244125924274254,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  const [margin, setMargin] = useState(1);

  const googleMapStyle = [{
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{
      visibility: "off"
    }]
  }]

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      console.log({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01}}
        userLocationUpdateInterval={100}
        loadingEnabled={true}
        customMapStyle={props.darkMode ? MapStyleDark : MapStyleLight}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        ></Marker>
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
