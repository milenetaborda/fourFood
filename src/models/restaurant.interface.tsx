export interface Restaurants {
  id?: string;
  name: string;
  logoUrl: string;
  deliveryTime: string;
  shipping: string;
  category?: string;
  address?: string;
}

export type RestaurantAction = {
  type: 'SET_RESTAURANTS' | 'SET_FILTER' | 'SET_RESTAURANT_DETAIL';
  restaurants: Restaurants;
  category: string;
  restaurantId: string;
};

export interface RestaurantState {
  allRestaurants: Restaurants[];
  filter: string;
  restaurantId: string;
}
