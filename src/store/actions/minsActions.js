import { ADD_MINS, RESET_MINS } from "../types";

export const addMins = (minsIndex) => {
  return {
    type: ADD_MINS,
    payload: minsIndex,
  };
};

export const resetMins = () => {
  return {
    type: RESET_MINS,
  };
};
