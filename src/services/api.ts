import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_VEGGIELINK,
  headers: {
    "Content-Type": "application/json",
  },
});
