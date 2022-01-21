import { getCurrentPositionAsync } from "expo-location";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import * as Location from "expo-location";

const LocationContext = createContext();

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [originLocation, setOriginLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [showRoute, setShowRoute] = useState(false);

  const getRoute = async (destination) => {
    await Location.getCurrentPositionAsync({}).then((data) => {
      const { latitude, longitude } = data.coords;
      setOriginLocation({ latitude: latitude, longitude: longitude });
      setDestinationLocation({ ...destination });
      setShowRoute(true);
    });
  };

  useEffect(() => {
    setDestinationLocation(destinationLocation);
    setShowRoute(showRoute);
  }, [showRoute]);

  const values = {
    originLocation,
    destinationLocation,
    showRoute,
    setShowRoute,
    getRoute,
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};
