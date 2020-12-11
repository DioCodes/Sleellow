import { ADD_MANTRA, RESET_MANTRA } from "../types";

const INITIAL_STATE = {
  mantra: "",
};

export const mantraReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MANTRA:
      return {
        ...state,
        mantra: action.payload,
      };
    case RESET_MANTRA:
      return {
        ...state,
        mantra: INITIAL_STATE.mantra,
      };
    default:
      return state;
  }
};
