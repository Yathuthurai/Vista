import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";

export const TRYAUTOLOGIN = "TRYAUTOLOGIN";

export const SELECT_IMAGE = "SELECT_IMAGE";

export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export const LOGOUT = "LOGOUT";

export const tryAutoLogin = () => {
  return {
    type: TRYAUTOLOGIN,
  };
};

export const authentication = (userId, token, firstName, lastName, email) => {
  return async (dispatch) => {
    let url;
    try {
      url = await firebase.storage().ref(`profile/${userId}`).getDownloadURL();
    } catch (e) {
      url = null;
    }
    dispatch({
      type: AUTHENTICATE,
      email,
      firstName,
      lastName,
      token,
      userId,
      url,
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

export const imagePick = (image) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      await firebase.storage().ref(`profile/${userId}`).put(image);
      const url = await firebase
        .storage()
        .ref(`profile/${userId}`)
        .getDownloadURL();

      dispatch({
        type: SELECT_IMAGE,
        url,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (e) {
      if (e.code === "auth/user-not-found") {
        throw new Error("Email not found!");
      }
      throw e;
    }
  };
};

export const deleteAccount = (password) => {
  return async (dispatch, getState) => {
    try {
      const email = getState().auth.email;
      const userId = getState().auth.userId;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await firebase.database().ref(`users/${userId}`).remove();
      await firebase.auth().currentUser.delete();
      dispatch({
        type: DELETE_ACCOUNT,
      });
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        throw new Error("Incorrect password...");
      }
      throw e;
    }
  };
};

export const changeEmail = (password, email) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      const oldEmail = getState().auth.email;
      await firebase.auth().signInWithEmailAndPassword(oldEmail, password);
      await firebase.database().ref(`users/${userId}`).update({ email });
      await firebase.auth().currentUser.updateEmail(email);
      dispatch({
        type: LOGOUT,
      });
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        throw new Error("Incorrect password");
      }
      if (e.code === "auth/email-already-in-use") {
        throw new Error("Email already exists");
      }
    }
  };
};
