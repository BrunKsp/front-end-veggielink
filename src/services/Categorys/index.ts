import { api } from "../api";

const url = "category";

export const getAllCategorys = () => {
  return api.get(`${url}/all`);
};
