import * as api from "../api";
import { SIGN_IN, CLIENT_SIGN_UP, DRIVER_SIGN_UP } from "../constants";
import jwt from "jwt-decode";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGN_IN, data });
    const role = jwt(data.token).role;
    console.log(role);
    switch(role) {
      case 'admin':
        history.push("/admin/all-rides");
        break;
      case 'user':  
        history.push("/");
        break;
      case 'driver':  
        history.push("/driver/home");
        break;
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const clientSignUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.clientSignUp(formData);
    dispatch({ type: CLIENT_SIGN_UP, data });
    history.push("/client/otp");
  } catch (e) {
    console.log(e.message);
  }
};

export const driverSignUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.driverSignUp(formData);
    dispatch({ type: DRIVER_SIGN_UP, data });
    history.push("/driver/otp");
  } catch (e) {
    console.log(e.message);
  }
};
