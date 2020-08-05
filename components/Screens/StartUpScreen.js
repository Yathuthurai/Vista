import React, { useEffect } from "react";

import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch } from "react-redux";
import { authentication, tryAutoLogin } from "../Store/Actions/auth";

const StartUpScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("UserData");
      if (!userData) {
        dispatch(tryAutoLogin());
        return;
      }
      const transFormData = JSON.parse(userData);
      const { token, userId, firstName, lastName } = transFormData;
      if (!token || !userId || !firstName || !lastName) {
        dispatch(tryAutoLogin());
        return;
      }
      dispatch(authentication(userId, token, firstName, lastName));
    };
    tryLogin();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default StartUpScreen;
