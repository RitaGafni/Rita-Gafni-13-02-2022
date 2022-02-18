export const addToFavorites = (cityKey, cityName) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      cityKey: cityKey,
      cityName: cityName,
    });
  };
};

export const deleteFromFavorites = (cityKey) => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_FROM_FAVORITE',
      cityKey: cityKey,
    });
  };
};

export const updateSelectedCity = (cityKey, cityName) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_SELECTED_CITY',
      cityKey: cityKey,
      cityName: cityName,
    });
  };
};
