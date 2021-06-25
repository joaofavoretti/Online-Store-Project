export interface User {
  email: string;
  password: string;
}

export interface UserCadastro {
  name: string;
  phone: string,
  email: string,
  address: string,
  password: string,
}

export interface AuthenticationTokens {
  accessToken: string;
}

export enum AuthLocalKeys {
  TOKEN = '@auth/token',
}

export enum AuthErrors {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}
