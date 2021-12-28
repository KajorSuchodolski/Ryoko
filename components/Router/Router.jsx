import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/authContext";
import SignInScreen from "../../screens/SignScreens/SignInScreen";
import SignUpScreen from "../../screens/SignScreens/SignUpScreen";
import UserProfileScreen from "../../screens/UserProfileScreen";


export const Router = () => {
  const { currentUser } = useAuth();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="User Profile"
            component={UserProfileScreen}
          />
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
