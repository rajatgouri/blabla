import * as api from "../api";
import {
  SIGN_IN,
  CLIENT_SIGN_UP,
  DRIVER_SIGN_UP,
  VERIFY_EMAIL,
  VERIFY_PHONE,
} from "../constants";
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
    await api.getEmailOtp(formData.email);
    swal({
      text: "Code is send to your email successfully",
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

export const verifyEmailOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    await api.getPhoneOtp(`91${formData.phone}`);
    swal({
      text: "Email is Verified and otp on phone number is send",
      icon: "success",
    });
    history.push("/client/otp");
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};

export const verifyPhoneOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyPhoneOtp(
      otp,
      formData.email,
      `91${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    swal({
      text: "Phone Number is Verified",
      icon: "success",
    });
    history.push("/client/verify");
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
    await api.getEmailOtp(formData.email);
    swal({
      text: "Code is send to your email successfully",
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

export const verifyDriverEmailOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    await api.getPhoneOtp(`91${formData.phone}`);
    swal({
      text: "Email is Verified and otp on phone number is send",
      icon: "success",
    });
    history.push("/driver/otp");
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};

export const verifyDriverPhoneOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyPhoneOtp(
      otp,
      formData.email,
      `91${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    swal({
      text: "Phone Number is Verified",
      icon: "success",
    });
    history.push("/driver/verify");
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};
