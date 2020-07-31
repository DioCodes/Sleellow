import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { mantraReducer } from "./reducers/mantraReducer";
import {levelReducer} from "./reducers/levelReducer";

export const rootReducer = combineReducers({

  mantra: mantraReducer,
  level: levelReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
