import {
  ADD_RESTAURANT,
  PASS_RESTAURANT,
} from '../actions/restaurants';

export const initialState = {
    restaurants: [
        {id: '1', uri: require('../assets/img-1.jpg')},
        {id: '2', uri: require('../assets/img-2.jpg')},
        {id: '3', uri: require('../assets/img-3.jpg')},
        {id: '4', uri: require('../assets/img-4.jpg')},
        {id: '5', uri: require('../assets/img-5.jpg')} 
    ],
    selectedRestaurants: [],
    empty: {id: 'empty', uri: require('../assets/empty.jpg')},
    loading: false,
    error: null,
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
  }
  return state;
}