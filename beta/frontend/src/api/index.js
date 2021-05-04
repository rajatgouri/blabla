import axios from "axios";

const url = "http://localhost:8080/api";

export const signIn = (formData) => axios.post(`${url}/login`, formData);
export const clientSignUp = (formData) =>
  axios.post(`${url}/client/signup`, formData);
export const driverSignUp = (formData) =>
  axios.post(`${url}/driver/signup`, formData);
export const getEmailOtp = (email) =>
  axios.get(`${url}/get-email-otp?email=${email}`);
export const getPhoneOtp = (phone) =>
  axios.get(`${url}/get-phone-otp?phone=${phone}`);
export const verifyEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-email-otp`, { otp, email });
export const verifyPhoneOtp = (otp, email, phone) =>
  axios.post(`${url}/verify-phone-otp?phone=${phone}&email=${email}`, {
    verificationCode: otp,
  });
