export interface ILogin {
  email: string;
  senha: string;
}

export interface ISigIn {
  name: string;
  email: string;
  segment?: string;
  password: string;
  photo?: string;
  description?: string;
}

export interface IAuthReponse {
  token: string;
  name: string;
}
