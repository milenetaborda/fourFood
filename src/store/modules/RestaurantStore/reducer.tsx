
export default function restaurants( state: any[] = [], action: any): any {
  switch (action.type) {
    case 'SET_RESTAURANTS': {
      return {...state, allRestaurants: action.restaurants}
    }
    default:
      return state;
  }
}
