import { combineReducers } from 'redux';
import SelectedCityReducer from './SelectedCity';
import FavoritesReducer from './Favorites';

const rootReducer = combineReducers({
  favorites: FavoritesReducer,
  selectedCity: SelectedCityReducer,
});

export default rootReducer;
