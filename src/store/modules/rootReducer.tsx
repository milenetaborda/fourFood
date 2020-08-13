import { combineReducers } from 'redux';
import signup from './UserStore/reducer';
import { connectRouter } from "connected-react-router";
import { History } from "history";

export const generateReducers = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    signup
  });
