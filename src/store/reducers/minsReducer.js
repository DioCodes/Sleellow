import { ADD_MINS, RESET_MINS } from "../types";

const INITIAL_STATE = {
  mins: 0,
};

export const minsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MINS:
      return {
        ...state,
        mins: state.mins + action.payload,
      };
    case RESET_MINS:
      return {
        ...state,
        mins: INITIAL_STATE.mins,
      };
    default:
      return state;
  }
};
