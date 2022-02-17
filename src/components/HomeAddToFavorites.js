import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../favoritesRedux';

export default function HomeAddToFavorites(props) {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();
  const { addToFavorites, deleteFromFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [isCityInFavorites, setIsCityInFavorites] = useState(false);

  const cityKey = props.cityKey;

  useEffect(() => {
    const checkIfCityInFavorites = (cityKey) => {
      let isThere = false;
      favorites.favoritesList.forEach((element) => {
        if (element[0] === cityKey) {
          isThere = true;
        }
      });
      setIsCityInFavorites(isThere);
      console.log(favorites.favoritesList);
    };
    checkIfCityInFavorites(cityKey);
  }, [cityKey, favorites.favoritesList]);

  const removeFromFavoritesHandler = () => {
    setIsCityInFavorites(false);
    deleteFromFavorites(props.cityKey);
  };

  const addToFavoritesHandler = () => {
    addToFavorites(props.cityKey, props.cityName);
    setIsCityInFavorites(true);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
        {isCityInFavorites ? (
          <IconButton
            color='secondary'
            aria-label='remove-from-favorites'
            onClick={removeFromFavoritesHandler}
          >
            <FavoriteIcon sx={{ fontSize: 40 }} />
          </IconButton>
        ) : (
          <IconButton
            color='secondary'
            aria-label='add-to-favorites'
            onClick={addToFavoritesHandler}
          >
            <FavoriteBorderIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      </Box>
    </div>
  );
}
