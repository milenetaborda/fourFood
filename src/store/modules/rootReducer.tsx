/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import user from './UserProfile/reducer';
import restaurants from './RestaurantStore/reducer';

export const generateReducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    user,
    restaurants,
  });
