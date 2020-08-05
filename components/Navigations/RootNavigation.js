import React from "react";

import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

import StartUpScreen from "../Screens/StartUpScreen";

const RootNavigation = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const checkAutoLogin = useSelector((state) => !!state.auth.tryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <MainNavigation />}
      {!isAuth && checkAutoLogin && <AuthNavigation />}
      {!isAuth && !checkAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};

export default RootNavigation;
