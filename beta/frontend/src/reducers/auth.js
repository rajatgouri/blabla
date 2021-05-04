import { SIGN_IN, CLIENT_SIGN_UP, DRIVER_SIGN_UP, LOGOUT } from "../constants";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("token", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case CLIENT_SIGN_UP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case DRIVER_SIGN_UP:
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
