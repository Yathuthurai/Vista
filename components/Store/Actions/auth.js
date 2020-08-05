import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";

export const TRYAUTOLOGIN = "TRYAUTOLOGIN";

export const LOGOUT = "LOGOUT";

export const tryAutoLogin = () => {
  return {
    type: TRYAUTOLOGIN,
  };
};

export const authentication = (userId, token, firstName, lastName, email) => {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      email,
      firstName,
      lastName,
      token,
      userId,
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem("UserData");
    dispatch({
      type: LOGOUT,
    });
  };
};

export const signUp = (email, firstName, lastName, password) => {
  return async (dispatch) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const userId = firebase.auth().currentUser.uid;
      const token = await firebase.auth().currentUser.getIdToken();

      await firebase
        .database()
        .ref(`users/${userId}`)
        .set({ firstName, lastName, email });

      saveDataToStorage(token, userId, firstName, lastName, email);

      dispatch(authentication(userId, token, firstName, lastName, email));
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        throw new Error("Email address already in use");
      }
      throw e;
    }
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      const userId = firebase.auth().currentUser.uid;
      const token = await firebase.auth().currentUser.getIdToken();

      const user = await firebase
        .database()
        .ref(`users/${userId}`)
        .once("value");

      saveDataToStorage(
        token,
        userId,
        user.val().firstName,
        user.val().lastName,
        email
      );

      dispatch(
        authentication(
          userId,
          token,
          user.val().firstName,
          user.val().lastName,
          email
        )
      );
    } catch (e) {
      if (
        e.code === "auth/user-not-found" ||
        e.code === "auth/wrong-password"
      ) {
        throw new Error("Incorrect email or password");
      }
      throw e;
    }
  };
};

const saveDataToStorage = (token, userId, firstName, lastName, email) => {
  AsyncStorage.setItem(
    "UserData",
    JSON.stringify({ token, userId, firstName, lastName, email })
  );
};
