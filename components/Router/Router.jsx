import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/authContext";
import SignInScreen from "../../screens/SignScreens/SignInScreen";
import SignUpScreen from "../../screens/SignScreens/SignUpScreen";
import UserProfileScreen from "../../screens/UserProfileScreens/UserProfileScreen";
import AddLocationScreen from "../../screens/UserProfileScreens/AddLocationScreen";
import SettingsScreen from "../../screens/UserProfileScreens/SettingsScreen";
import LocationInfoScreen from "../../screens/UserProfileScreens/LocationInfoScreen";
import AuthChangeScreen from "../../screens/UserProfileScreens/AuthChangeScreen";
import ShowCommentsScreen from "../../screens/UserProfileScreens/ShowCommentsScreen";

export const Router = () => {
  const { currentUser } = useAuth();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="User Profile"
              component={UserProfileScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Add Location"
              component={AddLocationScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Settings"
              component={SettingsScreen}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth Change"
              component={AuthChangeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Location Info"
              component={LocationInfoScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Show Comments Screen"
              component={ShowCommentsScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Sign In"
              component={SignInScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Sign Up"
              component={SignUpScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
