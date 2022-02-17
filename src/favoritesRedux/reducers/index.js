import { combineReducers } from 'redux';
import FavoritesReducer from './Favorites';

const rootReducer = combineReducers({
  favorites: FavoritesReducer,
});

export default rootReducer;
