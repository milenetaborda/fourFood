/* eslint-disable @typescript-eslint/explicit-function-return-type */

import axios from 'axios';
import { Restaurants } from '../../../models/restaurant.interface';

const baseURL =
  'https://us-central1-missao-newton.cloudfunctions.net/FourFoodA';

export const setRestaurants = (restaurants: Restaurants) => {
  return {
    type: 'SET_RESTAURANTS',
    restaurants,
  };
};

export const setFilter = (category: string) => {
  return {
    type: 'SET_FILTER',
    category,
  };
};

export const setRestaurantDetail = (restaurantId: string) => {
  return {
    type: 'SET_RESTAURANT_DETAIL',
    restaurantId,
  };
};

export const getRestaurants = () => async (dispatch: any) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${baseURL}/restaurants`, {
      headers: {
        auth: token,
      },
    });

    dispatch(setRestaurants(response.data.restaurants));
  } catch (err) {
    alert('Ocorreu um erro inesperado. Tente novamente!');
  }
};

export const getRestaurantDetail = (
  restaurantId: string,
  history: any,
) => async (dispatch: any) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${baseURL}/restaurants/${restaurantId}`, {
      headers: {
        auth: token,
      },
    });

    dispatch(setRestaurantDetail(response.data.restaurant));
    history.push('/restaurant/detail');
  } catch {
    alert('Restaurante não encontrado. Tente novamente');
  }
};
