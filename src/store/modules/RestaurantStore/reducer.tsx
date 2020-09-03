import {
  RestaurantState,
  RestaurantAction,
} from '../../../models/restaurant.interface';

export default function restaurants(
  state: RestaurantState[] = [],
  action: RestaurantAction,
): any {
  switch (action.type) {
    case 'SET_RESTAURANTS': {
      return { ...state, allRestaurants: action.restaurants };
    }
    case 'SET_FILTER': {
      return { ...state, filter: action.category };
    }
    case 'SET_RESTAURANT_DETAIL': {
      return { ...state, restaurantId: action.restaurantId };
    }
    default:
      return state;
  }
}
