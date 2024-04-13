import { api } from "../api";
import { IAuthReponse, ILogin } from "./interface";

const url = "user";

export const login = (data: ILogin) => {
  return api.post<IAuthReponse>(`${url}/login`, data);
};
