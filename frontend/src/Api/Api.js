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

export const fetchWardData = () => {
  return axios.get(`${baseURL}/data`);
};

export const postWardData = (wardData) => {
  return axios.post(`${baseURL}/data`, wardData);
};

export const fetchReview = () => {
  return axios.get(`${baseURL}/reviews`);
};

export const postReview = (id, review) => {
  return axios.post(`${baseURL}/review/${id}`, review);
};

export const upvoteReview = (id) => {
  return axios.patch(`${baseURL}/review/${id}/vote`);
};
