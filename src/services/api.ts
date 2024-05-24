import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-end-veggielink.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token: string | undefined) => {
  api.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : '';
}