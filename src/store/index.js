import { minsReducer } from "./reducers/minsReducer";
import { syncReducer } from "./reducers/syncReducer";
import { mantraReducer } from "./reducers/mantraReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
  mins: minsReducer,
  sync: syncReducer,
  mantra: mantraReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
