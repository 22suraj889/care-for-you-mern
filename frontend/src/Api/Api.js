import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const baseURL = "http://localhost:5000";

export const registerUser = (authData) => {
  console.log(authData);
  return axios.post(`${baseURL}/user/register`, authData);
};

export const loginUser = (authData) => {
  return axios.post(`${baseURL}/user/login`, authData);
};
