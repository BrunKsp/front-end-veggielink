import { api } from "../api";

const url = "category";

export const getAllCategorys = () => {
  return api.get(`${url}/all`);
};

export const createCategory = (data: ICreateProduct) => {
  console.log(data);
  return api.post(`${url}`, data);
};

interface ICreateProduct {
  name: string;
}
