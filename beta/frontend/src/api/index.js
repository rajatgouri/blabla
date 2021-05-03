import axios from "axios";

const url = "http://localhost:8080/api/";

export const signIn = (formData) => axios.post(`${url}/login`, formData);
export const clientSignUp = (formData) =>
  axios.post(`${url}/client/signup`, formData);
export const driverSignUp = (formData) =>
  axios.post(`${url}/driver/signup`, formData);
