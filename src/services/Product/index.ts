import { api } from "../api";


const url = "products";

export const getProduct = () => {
  return api.get(`${url}/all`);
};

