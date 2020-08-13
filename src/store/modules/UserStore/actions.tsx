import axios from 'axios';
import { UserInfo, UserSignup, USER_INFO } from '../../../models/userAction';
import baseURL from '../../../services/api';

import { replace } from 'connected-react-router';
import { Dispatch } from 'react';

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
}: UserSignup) => async (dispatch: Dispatch<any>) => {
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

    dispatch(replace("/signup/adress"));

  } catch (err) {

    console.log(err.message);
    dispatch(replace("/signup/adress"));
  }
};
