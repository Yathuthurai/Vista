import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../Screens/WelcomeScreen";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";

const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ForgotPwd" component={ForgotPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
