import { syncReducer } from "./reducers/syncReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
  sync: syncReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
