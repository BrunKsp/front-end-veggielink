import { api } from "../api";


const url = "products";

export const getProduct = () => {
  return api.get(`${url}/all`);
};

export const getProductById = (id: string) => {
  return api.get(`${url}`, {
    params: {
      id: id,
    },
  });
}