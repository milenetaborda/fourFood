import axios from 'axios';
import { useDispatch } from 'react-redux';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA";

export const setRestaurants = (restaurants: any) => {
 return {
  type: 'SET_RESTAURANTS',
  restaurants
 }
};

export const setFilter = (category: string) => {
  return {
    type: 'SET_FILTER',
    category
   }
};


export const getRestaurants = () => async (dispatch: any) => {

  const token = localStorage.getItem("token");

try{
  const response = await axios.get(`${baseURL}/restaurants`, {
    headers: {
      auth: token
    }
  });

  dispatch(setRestaurants(response.data.restaurants));

} catch(err) {
  alert("deu erro")
}
}

export const getRestaurantDetail  =  (restaurantId: string) => async () => {
  const token = localStorage.getItem("token");

  try{
    const response = await axios.get(`${baseURL}/restaurants/${restaurantId}`, {
      headers: {
        auth: token
      }
    });

    console.log(response.data);
  }catch {
    console.log("deu erro")
  };
};
