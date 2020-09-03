export const USER_INFO = 'USER_INFO';

export interface UserInfo {
  type: typeof USER_INFO;
  info: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignup {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export interface UserAddress {
  street: string;
  number: string;
  complement?: string;
  neighbourhood: string;
  city: string;
  state: string;
}
