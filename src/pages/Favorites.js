import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import FavoritesItem from '../components/FavoritesItem';
import { getFavoritesData } from '../services/FavoritesServices';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favoritesList);
  // const [favoritesData, setFavoritesData] = useState();

  // useEffect(() => {
  //   const updateFavoritesData = async (favorites) => {
  //     console.log('useEff');
  //     const data = await getFavoritesData(favorites);
  //     setFavoritesData(data);
  //   };
  //   updateFavoritesData(favorites);
  // }, [favorites]);

  const favoritesData = [
    {
      cityName: 'moosarambagh',
      temperature: '2',
      weatherText: 'weatherData',
      iconURL: 'https://www.accuweather.com/images/weathericons/1.svg',
      key: '1111111',
    },
    {
      cityName: 'kleinblittersdorf',
      temperature: '15',
      weatherText: 'sdl sd;lfk',
      iconURL: 'https://www.accuweather.com/images/weathericons/18.svg',
      key: '123456',
    },
    {
      cityName: 'muckanaghederdauhaulia',
      temperature: '-5',
      weatherText: 'fdgadfgdfg',
      iconURL: 'https://www.accuweather.com/images/weathericons/7.svg',
      key: '3545887',
    },
    {
      cityName: 'element',
      temperature: '5',
      weatherText: 'weatherData gg',
      iconURL: 'https://www.accuweather.com/images/weathericons/14.svg',
      key: '123456',
    },
    {
      cityName: 'element',
      temperature: '25',
      weatherText: 'clouds and sun',
      iconURL: 'https://www.accuweather.com/images/weathericons/31.svg',
      key: '123456',
    },
    {
      cityName: 'staronizhyestyebliyevskaya',
      temperature: '13',
      weatherText: 'weathdferData',
      iconURL: 'https://www.accuweather.com/images/weathericons/21.svg',
      key: '288799',
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
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
        <Grid container spacing={3}>
          {favoritesData &&
            favoritesData.map((item) => <FavoritesItem item={item} />)}
        </Grid>
      </Box>
    </div>
  );
}
