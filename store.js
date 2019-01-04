import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from './reducers/restaurants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        restaurant: restaurantsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;