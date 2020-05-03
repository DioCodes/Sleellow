import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  SIGNOUT_SUCCESS,
} from "../types";

const initialState = {
  syncError: null,
};

export const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("sync failed");
      return {
        ...state,
        syncError: "Synchronization failed!",
        // userData: action.payload,
      };
    case REGISTRATION_ERROR:
      console.log("sync failed");
      return {
        ...state,
        syncError: "Synchronization failed!",
        // userData: action.payload,
      };
    case LOGIN_SUCCESS:
      console.log("sync success");
      return {
        ...state,
        syncError: null,
      };
    case REGISTRATION_SUCCESS:
      console.log("sync success");
      return {
        ...state,
        syncError: null,
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return state;
    default:
      return state;
  }
};
