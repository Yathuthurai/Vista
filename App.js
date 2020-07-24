import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import WelcomeScreen from "./components/Screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, combineReducers } from "redux";

import { Provider } from "react-redux";

import SignInScreen from "./components/Screens/SignInScreen";
import SignUpScreen from "./components/Screens/SignUpScreen";
import RegisteredScreen from "./components/Screens/RegisteredScreen";
import ProfileScreen from "./components/Screens/ProfileScreen";
import EditProfileScreen from "./components/Screens/EditProfileScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import FavouritesScreen from "./components/Screens/FavouritesScreen";
import AddArticleScreen from "./components/Screens/AddArticleScreen";
import ArticleReducer from "./components/Store/Reducers/Articles";
import ArticleFullView from "./components/Screens/ArticleFullView";

const Stack = createStackNavigator();

const rootReducer = combineReducers({ article: ArticleReducer });

const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FullView" component={ArticleFullView} />
          <Stack.Screen name="Add" component={AddArticleScreen} />
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
          <Stack.Screen name="Registered" component={RegisteredScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
