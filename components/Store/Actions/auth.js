import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";

export const TRYAUTOLOGIN = "TRYAUTOLOGIN";

export const tryAutoLogin = () => {
  return {
    type: TRYAUTOLOGIN,
  };
};

export const authentication = (userId, token, firstName, lastName) => {
  return async (dispatch) => {
    const email = firebase.auth().currentUser.email;

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

      saveDataToStorage(token, userId, firstName, lastName);

      dispatch(authentication(userId, token, firstName, lastName));
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
        user.val().lastName
      );

      dispatch(
        authentication(userId, token, user.val().firstName, user.val().lastName)
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

const saveDataToStorage = (token, userId, firstName, lastName) => {
  AsyncStorage.setItem(
    "UserData",
    JSON.stringify({ token, userId, firstName, lastName })
  );
};
