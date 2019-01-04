export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const addRestaurant = (restaurant) => ({
  type: ADD_RESTAURANT,
  restaurant
});

export const PASS_RESTAURANT = 'PASS_RESTAURANT';
export const passRestaurant = () => ({
  type: PASS_RESTAURANT,
});

export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const selectRestaurant = (restaurant) => ({
  type: SELECT_RESTAURANT,
  restaurant
});

export const CLEAR_SELECTED_RESTAURANT = 'CLEAR_SELECTED_RESTAURANT';
export const clearSelectedRestaurant = () => ({
  type: CLEAR_SELECTED_RESTAURANT
});

export const DELETE_SELECTED_RESTAURANT = 'DELETE_SELECTED_RESTAURANT';
export const deleteSelectedRestaurant = (restaurant) => ({
  type: DELETE_SELECTED_RESTAURANT,
  restaurant
});