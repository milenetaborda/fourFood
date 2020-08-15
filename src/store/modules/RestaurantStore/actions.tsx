import axios from 'axios';
import { useDispatch } from 'react-redux';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA";

export function setRestaurants (restaurants: any): any {
 return {
  type: 'SET_RESTAURANTS',
  restaurants
 }
}
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
