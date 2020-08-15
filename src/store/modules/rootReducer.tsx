import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { History } from "history";
import signup from './UserStore/reducer';
import restaurants from './RestaurantStore/reducer';

export const generateReducers = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    signup,
    restaurants
  });
