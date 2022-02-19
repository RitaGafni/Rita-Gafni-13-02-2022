import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import FavoritesItem from '../components/FavoritesItem';
import { getFavoritesData } from '../services/FavoritesServices';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favoritesList);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    const updateFavoritesData = async (favorites) => {
      const data = await getFavoritesData(favorites);
      setFavoritesData(data);
    };
    updateFavoritesData(favorites);
  }, [favorites]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '80%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          m: 1,
          p: 1,
          maxWidth: 1200,
          maxHeight: 800,
          minHeight: 400,
        }}
      >
        <Grid sx={{ justifyContent: 'center' }} container spacing={3}>
          {favoritesData &&
            favoritesData.map((item) => (
              <FavoritesItem item={item} key={item.key} />
            ))}
        </Grid>
      </Box>
      {favoritesData && favoritesData.length === 0 && (
        <Typography sx={{ mt: 5 }} variant='h4' gutterBottom component='div'>
          No favorites to show
        </Typography>
      )}
    </div>
  );
}
