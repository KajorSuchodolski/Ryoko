import { db } from "../config/firebase";
import * as Location from "expo-location";


export const getLocations = async () => {
  const locations = await db.collection('markers').get();
  const data = locations.docs.map((doc) => ({...doc.data()}));
  return data;
};

export const addLocations = async (title, description) => {

  // if(title || description === '') {
  //   alert("Title or description is empty!");
  //   return;
  // }

  const location = await Location.getCurrentPositionAsync({});
  const coords = {
    title: title,
    description: description,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  };
  
  const locations = await db.collection('markers');
  locations.add(coords).then(() => alert("Location added succesfull!")).catch(err => alert(err.message));
}
