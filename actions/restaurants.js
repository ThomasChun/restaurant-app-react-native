export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = (restaurant) => ({
  type: ADD_RESTAURANT,
  restaurant
});

export const PASS_RESTAURANT = 'PASS_RESTAURANT';
export const passRestaurant = () => ({
  type: PASS_RESTAURANT,
});