import * as firebase from "firebase";

export const SIGNUP = "SIGNUP";

export const LOGIN = "LOGIN";

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

      dispatch({
        type: SIGNUP,
        email,
        firstName,
        lastName,
        token,
        userId,
      });
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

      dispatch({
        type: LOGIN,
        email,
        firstName: user.val().firstName,
        lastName: user.val().lastName,
        token,
        userId,
      });
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
