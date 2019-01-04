import {
  ADD_RESTAURANT,
  PASS_RESTAURANT,
  SELECT_RESTAURANT,
  CLEAR_SELECTED_RESTAURANT,
  DELETE_SELECTED_RESTAURANT
} from '../actions/restaurants';

export const initialState = {
    restaurants: [
        {id: 1, name: 'Pizza Oven', uri: require('../assets/img-1.jpg'), visible: false, description: 'test 1 - description of restaurant will go here'},
        {id: 2, name: 'Salad Bar', uri: require('../assets/img-2.jpg'), visible: false, description: 'test 2 - description of restaurant will go here'},
        {id: 3, name: 'Pasta Zone', uri: require('../assets/img-3.jpg'), visible: false, description: 'test 3 - description of restaurant will go here'},
        {id: 4, name: 'Seafood Shack', uri: require('../assets/img-4.jpg'), visible: false, description: 'test 4 - description of restaurant will go here'},
        {id: 5, name: 'The Steak House', uri: require('../assets/img-5.jpg'), visible: false, description: 'test 5 - description of restaurant will go here'},
        {id: 6, name: 'Sushi', uri: require('../assets/img-6.jpg'), visible: false, description: 'test 6 - description of restaurant will go here'},
        {id: 7, name: 'Hot Dog Cart', uri: require('../assets/img-7.jpg'), visible: false, description: 'test 7 - description of restaurant will go here'},
        {id: 8, name: 'Ramen Hut', uri: require('../assets/img-8.jpg'), visible: false, description: 'test 8 - description of restaurant will go here'},
        {id: 9, name: 'Korean BBQ', uri: require('../assets/img-9.jpg'), visible: false, description: 'test 9 - description of restaurant will go here'},
        {id: 10, name: 'Fried Chicken Wings', uri: require('../assets/img-10.jpg'), visible: false, description: 'test 10 - description of restaurant will go here'},
    ],
    selectedRestaurants: [],
    viewRestaurant: {},
    empty: {id: 'empty', uri: require('../assets/empty.jpg')},
    loading: false,
    error: null,
    visible: false,
}

function findRestaurant(restaurants, selectedRestaurant) {
  return restaurants.findIndex(restaurant => restaurant.name === selectedRestaurant)
}

export default function restaurantsReducer(state=initialState, action) {
  if (action.type === ADD_RESTAURANT) {
    return Object.assign({}, state, {
      selectedRestaurants: [...state.selectedRestaurants, action.restaurant]
    })
  } else if (action.type === PASS_RESTAURANT) {
    return Object.assign({}, state, {
      restaurants: state.restaurants.filter(restaurant => restaurant !== state.restaurants[0])
    })
  } else if (action.type === SELECT_RESTAURANT) {
    return Object.assign({}, state, {
      viewRestaurant: action.restaurant,
      visible: true
    })
  } else if (action.type === CLEAR_SELECTED_RESTAURANT) {
    return Object.assign({}, state, {
      viewRestaurant: {},
      visible: false
    })
  } else if (action.type === DELETE_SELECTED_RESTAURANT) {
    return Object.assign({}, state, {
      selectedRestaurants: state.selectedRestaurants.filter(restaurant => restaurant !== action.restaurant),
      visible: false
    })
  }
  return state;
}