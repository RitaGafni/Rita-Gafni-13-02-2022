import configData from '../../config.json';

const SelectedCityReducer = (
  state = [configData.DEFAULT_CITY_KEY, configData.DEFAULT_CITY],
  action
) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_CITY':
      const newArray = [action.cityKey, action.cityName];
      return newArray;
    default:
      return state;
  }
};

export default SelectedCityReducer;
