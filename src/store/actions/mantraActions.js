import { ADD_MANTRA, RESET_MANTRA } from "../types";

export const addMantra = (text) => {
  return {
    type: ADD_MANTRA,
    payload: text,
  };
};

export const resetMantra = () => {
  return {
    type: RESET_MANTRA,
  };
};
