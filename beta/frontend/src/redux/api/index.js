import axios from "axios";

export const url = "http://localhost:8090/api";

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
export const verifyForgotEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-forgot`, { otp, email });
export const verifyPhoneOtp = (otp, email, phone) =>
  axios.post(`${url}/verify-phone-otp?phone=${phone}&email=${email}`, {
    verificationCode: otp,
  });
export const verifyId = ( email, body) =>
  axios.post(`${url}/upload-id?email=${email}`, body);
export const addVehicle = ( email, body) =>
  axios.post(`${url}/add-vehicle?email=${email}`, body);
export const changePassword = (body) =>
  axios.put(`${url}/change-password`, body);
export const getUsers = () =>
  axios.get(`${url}/admin/get-users`);
export const getUserById = (id) =>
  axios.get(`${url}/admin/get-user?id=${id}`);
export const approveUser = (id) =>
  axios.post(`${url}/admin/approve-user`,{
    id: id
  });
export const getVehicles = (email) =>
  axios.get(`${url}/get-vehicles?email=${email}`);
export const addRide = (ride) =>
  axios.post(`${url}/add-ride`, {
    ride: ride,
  });
export const confirmRide = (ride) =>
  axios.post(`${url}/pay`, {
    ride: ride,
  });
export const getRides = (from,to,date) =>
  axios.get(`${url}/get-rides?from=${from}&to=${to}&date=${date }`);
export const getRideById = (id) =>
  axios.get(`${url}/get-ride?id=${id}`);
export const confirmBooking = (booking) =>
  axios.post(`${url}/confirm-ride`,booking);
