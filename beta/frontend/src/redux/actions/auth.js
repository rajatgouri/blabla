import * as api from "../api";
import {
  SIGN_IN,
  CLIENT_SIGN_UP,
  DRIVER_SIGN_UP,
  VERIFY_EMAIL,
  VERIFY_PHONE,
  VERIFY_ID,
  ADD_VEHICLE,
  EMAIL_OTP,
  PHONE_OTP,
  VERIFY_FORGOT,
  CHANGE_PASSWORD
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
    console.log(e.response);
    swal({
      text: e.response.data.msg,
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
    history.push("/client/email");    
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const verifyEmailOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    await api.getPhoneOtp(`${formData.phone}`);
    swal({
      text: "Email is Verified and otp on phone number is send",
      icon: "success",
    });
    history.push("/client/otp");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const verifyForgotEmailOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = (localStorage.getItem("email"));
    console.log(formData);
    const { data } = await api.verifyForgotEmailOtp(otp, formData);
    dispatch({ type: VERIFY_FORGOT, data });
    swal({
      text: "OTP Verified",
      icon: "success",
    });
    history.push("/change");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const changePassword = (password, history) => async (dispatch) => {
  try {
    const formData = (localStorage.getItem("email"));
    const token = (localStorage.getItem("forgotToken"));
    const body = {
      "email" : formData,
      "token" : token,
      "pass" : password
    };
    const { data } = await api.changePassword(body);
    dispatch({ type: CHANGE_PASSWORD, data });
    swal({
      text: "Password Changed",
      icon: "success",
    });
    history.push("/login");
  } catch (e) {
    swal({
      text: e.response.data.msg,
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
      `${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    swal({
      text: "Phone Number is Verified",
      icon: "success",
    });
    history.push("/client/verify");
  } catch (e) {
    swal({
      text: e.response.data.msg,
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
    history.push("/driver/email");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const emailOtp = () => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.getEmailOtp(formData.email);
    swal({
      text: "Code is send to your email successfully",
      icon: "success",
    });
    dispatch({ type: EMAIL_OTP, data });
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const forgotEmailOtp = ( formData, history) => async (dispatch) => {
  try {
    const { data } = await api.getEmailOtp(formData.email);
    localStorage.setItem("email" ,formData.email);
    swal({
      text: "Code is send to your email successfully",
      icon: "success",
    });
    dispatch({ type: EMAIL_OTP, data });
    history.push("/forgot-otp");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const phoneOtp = () => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.getPhoneOtp(formData.phone);
    swal({
      text: "Code is send to your Phone successfully",
      icon: "success",
    });
    dispatch({ type: PHONE_OTP, data });
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const verifyDriverEmailOtp = (otp, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyEmailOtp(otp, formData.email);
    dispatch({ type: VERIFY_EMAIL, data });
    await api.getPhoneOtp(`${formData.phone}`);
    swal({
      text: "Email Verified Successfully!",
      icon: "success",
    });
    history.push("/driver/otp");
  } catch (e) {
    swal({
      text: e.response.data.msg,
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
      `${formData.phone}`
    );
    dispatch({ type: VERIFY_PHONE, data });
    swal({
      text: "Phone Number is Verified",
      icon: "success",
    });
    history.push("/driver/verify");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const verifyClientId = (body, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyId(
      formData.email,
      body
    );
    dispatch({ type: VERIFY_ID, data });
    swal({
      text: "All Documents Submitted",
      icon: "success",
    });
    history.push("/");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const verifyDriverId = (body, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.verifyId(
      formData.email,
      body
    );
    dispatch({ type: VERIFY_ID, data });
    swal({
      text: "All Documents Submitted",
      icon: "success",
    });
    history.push("/driver/add-vehicle");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const addVehicle = (body, history) => async (dispatch) => {
  try {
    const formData = JSON.parse(localStorage.getItem("userProfile"));
    const { data } = await api.addVehicle(
      formData.email,
      body
    );
    dispatch({ type: ADD_VEHICLE, data });
    swal({
      text: "Vehicle added",
      icon: "success",
    });
    history.push("/driver/home");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    } else {
      const decoded = jwt(token)
      if (decoded?.email) {
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
}

export const userRole = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return ''
    } else {
      const decoded = jwt(token)?.role
      return decoded;
    }
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
}
