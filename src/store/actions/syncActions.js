import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  SIGNOUT_SUCCESS,
} from "../types";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const registerUser = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: REGISTRATION_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: REGISTRATION_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};
