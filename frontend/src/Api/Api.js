import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
const baseURL = "http://localhost:5000";

export const registerUser = (authData) => {
  console.log(authData);
  return API.post(`${baseURL}/user/register`, authData);
};

export const loginUser = (authData) => {
  return API.post(`${baseURL}/user/login`, authData);
};

export const fetchWardData = () => {
  return API.get(`${baseURL}/data`);
};

export const postWardData = (wardData) => {
  return API.post(`${baseURL}/data`, wardData);
};

export const fetchReview = () => {
  return API.get(`${baseURL}/reviews`);
};

export const postReview = (id, review) => {
  return API.post(`${baseURL}/reviews/${id}`, review);
};

export const upvoteReview = (id) => {
  return API.patch(`${baseURL}/reviews/${id}/vote`);
};
