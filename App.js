import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import WelcomeScreen from "./components/Screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./components/Screens/SignInScreen";
import SignUpScreen from "./components/Screens/SignUpScreen";
import RegisteredScreen from "./components/Screens/RegisteredScreen";
import ProfileScreen from "./components/Screens/ProfileScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import FavouritesScreen from "./components/Screens/FavouritesScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="Registered" component={RegisteredScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
