import * as api from "../api";
import { SIGN_IN, CLIENT_SIGN_UP, DRIVER_SIGN_UP } from "../constants";
import jwt from "jwt-decode";
import swal from "sweetalert";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGN_IN, data });
    const role = jwt(data.token).role;
    swal({
      text: `You are logged in as ${role}`,
      icon: "success",
    });    
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
    swal({
      text: e.message,
      icon: "error",
    });
    
  }
};

export const clientSignUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.clientSignUp(formData);    
    dispatch({ type: CLIENT_SIGN_UP, data });
    swal({
      text: "You are signed up",
      icon: "success",
    });
    history.push("/client/email");
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};

export const driverSignUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.driverSignUp(formData);
    dispatch({ type: DRIVER_SIGN_UP, data });
    swal({
      text: "You are signed up",
      icon: "success",
    });
    history.push("/driver/email");
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};
