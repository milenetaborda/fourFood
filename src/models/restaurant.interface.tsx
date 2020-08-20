export interface Restaurants {
  id?: string;
  name: string;
  logoUrl: string;
  deliveryTime: string;
  shipping: string;
  category?: string;
  address?: string;
};

export type RestaurantAction = {
  type: 'SET_RESTAURANTS' | 'SET_FILTER';
  restaurants: any; // Rever isso
  category: any;
};

export interface RestaurantState {
  allRestaurants: Restaurants[];
  filter: string;
};
