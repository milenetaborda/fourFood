export const USER_INFO = 'USER_INFO';

export interface UserInfo {
  type: typeof USER_INFO;
  info: string;
}

export interface UserSignup {
  name: string;
  email: string;
  password: string;
  cpf: string;
}
