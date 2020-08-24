
export default function restaurants(state: any[] = [], action: any): any {

  switch (action.type) {
    case 'SET_RESTAURANTS': {
      return { ...state, allRestaurants: action.restaurants }
    }
    case 'SET_FILTER': {
      return { ...state, filter: action.category }
    }
    case 'SET_RESTAURANT_DETAIL': {
      return { ...state, restaurantId: action.restaurantId }
    }
    default:
      return state;
  }
}
