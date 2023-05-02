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

axios.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Do something with the response error
    if (error.response.status === 401) {
      localStorage.removeItem("profile");
    }
    return Promise.reject(error);
  }
);

const baseURL = "http://localhost:5000";

export const registerUser = (authData) => {
  return API.post(`${baseURL}/user/register`, authData);
};

export const loginUser = (authData) => {
  return API.post(`${baseURL}/user/login`, authData);
};

export const fetchWardData = () => {
  return API.get(`${baseURL}/data`);
};

export const postWardData = (wardData) => {
  return API.post(`${baseURL}/data/addWard`, wardData);
};

export const editWardData = (id, updatedData) => {
  return API.patch(`${baseURL}/data/editWard/${id}`, updatedData);
};

export const fetchReview = () => {
  return API.get(`${baseURL}/reviews`);
};

export const postReview = (review) => {
  console.log("Review Posted");
  return API.post(`${baseURL}/reviews/`, review);
};

export const upvoteReview = (id) => {
  return API.patch(`${baseURL}/reviews/${id}/vote`);
};
