import { db, storage } from "../config/firebase";
import * as Location from "expo-location";
import uuid from "react-native-uuid";

export const getLocations = async () => {
  const locations = await db.collection('markers').get();
  const data = locations.docs.map((doc) => ({...doc.data()}));
  return data;
};

export const addLocations = async (title, description, uri) => {


  if(title === '' || description === '') {
    alert("Title or description is empty!");
    return;
  }

   if(!uri) {
    alert("Photo must be taken!");
    return;
  }

  const markerId = uuid.v1();
  const location = await Location.getCurrentPositionAsync({});

  await uploadImage(uri, markerId).then(() => console.log("Image uploaded")).catch(err => alert(err.message));
  const imageRef =  await storage.ref().child("images").child(markerId);
  const image = await imageRef.getDownloadURL();

  const marker = {
    id: markerId,
    title: title,
    description: description,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    imageUrl: image
  };
  

  const locations = await db.collection('markers');

  await locations.add(marker).then(() => alert("Location added succesfull!")).catch(err => alert(err.message));
}


const uploadImage = async (uri, imageName) => {
  console.log(uri);

  const image = await fetch(uri);
  const blob = await image.blob();

  const images = storage.ref().child("images/" + imageName);
  return images.put(blob);
}
