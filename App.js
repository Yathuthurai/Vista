import React from "react";

import { firebaseConfig } from "./firebase";
import * as firebase from "firebase";

import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { Provider } from "react-redux";

import AuthReducer from "./components/Store/Reducers/auth";
import ArticleReducer from "./components/Store/Reducers/Articles";
import CommentReducer from "./components/Store/Reducers/comments";
import RegisteredScreen from "./components/Screens/RegisteredScreen";
import RootNavigation from "./components/Navigations/RootNavigation";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  article: ArticleReducer,
  auth: AuthReducer,
  comment: CommentReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
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

//<Stack.Screen name="Registered" component={RegisteredScreen} />
