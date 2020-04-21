import { LOGIN_USER } from "../types";
import { USER_DATA } from "../../userData";

export const loginUser = () => {
  return {
    type: LOGIN_USER,
    payload: USER_DATA,
  };
};
