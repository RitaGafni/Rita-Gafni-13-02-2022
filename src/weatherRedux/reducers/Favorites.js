const initState = {
  favoritesList: [],
};

const FavoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        favoritesList: [
          ...state.favoritesList,
          [action.cityKey, action.cityName],
        ],
      };
    case 'DELETE_FROM_FAVORITE':
      const newArray = state.favoritesList.filter(
        (item) => item[0] !== action.cityKey
      );
      return { favoritesList: newArray };

    default:
      return state;
  }
};

export default FavoritesReducer;
