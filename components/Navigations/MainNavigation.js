import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../Screens/ProfileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import ChangePassword from "../Screens/ChangePassword";
import HomeScreen from "../Screens/HomeScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import AddArticleScreen from "../Screens/AddArticleScreen";
import ArticleFullView from "../Screens/ArticleFullView";
import MyPostsScreen from "../Screens/MyPostsScreen";
import UpdateScreen from "../Screens/UpdateScreen";
import RemoveAccountScreen from "../Screens/RemoveAccountScreen";

const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyPosts" component={MyPostsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePwd" component={ChangePassword} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ArticleCardFullView" component={ArticleFullView} />
      <Stack.Screen name="UpdateArticle" component={UpdateScreen} />
      <Stack.Screen name="Add" component={AddArticleScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="RemoveAcc" component={RemoveAccountScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
