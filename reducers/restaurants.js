import {
  ADD_RESTAURANT,
  PASS_RESTAURANT,
  SELECT_RESTAURANT,
  CLEAR_SELECTED_RESTAURANT,
} from '../actions/restaurants';

export const initialState = {
    restaurants: [
        {id: 0, name: 'Restaurant 1', uri: require('../assets/img-1.jpg'), visible: false, description: 'test 1'},
        {id: 1, name: 'Restaurant 2', uri: require('../assets/img-2.jpg'), visible: false, description: 'test 2'},
        {id: 2, name: 'Restaurant 3', uri: require('../assets/img-3.jpg'), visible: false, description: 'test 3'},
        {id: 3, name: 'Restaurant 4', uri: require('../assets/img-4.jpg'), visible: false, description: 'test 4'},
        {id: 4, name: 'Restaurant 5', uri: require('../assets/img-5.jpg'), visible: false, description: 'test 5'}
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
  }
  return state;
}