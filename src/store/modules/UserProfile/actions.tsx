import axios from 'axios';

import { Dispatch } from 'react';
import { Action } from 'redux';
import {
  UserInfo,
  USER_INFO,
  UserUpdateForm,
  UserAddress,
} from '../../../models/userAction';
import api from '../../../services/api';

export function setUserInfo(info: any): UserInfo {
  return {
    type: USER_INFO,
    info,
  };
}

export const getProfile = () => async (dispatch: Dispatch<Action>) => {
  try {
    const response = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/FourFoodA/profile',
      {
        headers: {
          auth: localStorage.getItem('token'),
        },
      },
    );
    dispatch(setUserInfo(response.data.user));
  } catch {
    alert('Ocorreu um erro inesperado, tente novamente!');
  }
};

export const updateProfile = ({ name, email, cpf }: UserUpdateForm) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    const body = {
      name,
      email,
      cpf,
    };

    await axios.put(
      'https://us-central1-missao-newton.cloudfunctions.net/FourFoodA/profile',
      body,
      {
        headers: {
          auth: localStorage.getItem('token'),
        },
      },
    );

    dispatch(getProfile());
  } catch {
    alert('Ocorreu um erro inesperado, tente novamente!');
  }
};

export const updateAddress = ({
  street,
  number,
  complement,
  neighbourhood,
  city,
  state,
}: UserAddress) => async (dispatch: Dispatch<Action>) => {
  try {
    const body = {
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
    };
  } catch {
    alert('Ocorreu um erro inesperado, tente novamente!');
  }
};
