import { LOGIN_USER } from "../types";

const initialState = {
  userData: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
