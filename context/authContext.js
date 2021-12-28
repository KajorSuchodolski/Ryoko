import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };
  
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const googleLogIn = () => {
    const config = {
      androidClientId:
        "471734118607-7blh280q97ntekappsbjr43liu26ftm4.apps.googleusercontent.com",
      scope: ["profile", "email"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;

        if (type === "success") {
          const { email, name, photoUrl } = user;
          console.log("Logged in with: ", user);
          setCurrentUser(user);
        } else {
          console.log("Unexpected error occured!");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered user: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        setCurrentUser(null);
        console.log("User logged out succesfully!");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
     auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const values = { currentUser, googleLogIn, signUp, logOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

