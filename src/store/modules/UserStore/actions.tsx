import axios from 'axios';
import { UserInfo, UserSignup, USER_INFO } from '../../../models/userAction';
import baseURL from '../../../services/api';

export function setUserInfo(info: string): UserInfo {
  return {
    type: USER_INFO,
    info,
  };
}

export const signup = ({
  name,
  email,
  cpf,
  password,
}: UserSignup, history:  any) => async () => {

  try {
    const body = {
      name,
      email,
      cpf,
      password,
    };

    const response = await axios.post(`${baseURL}/signup`, body);

    localStorage.setItem("token", response.data.token);
    alert("Usuário cadastrado com sucesso!");

    history.replace("/signup/adress");

  } catch (err) {
    alert("Usuário já cadastrado!");
    history.replace("/");
  }
};
