import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getFiveDayForecast } from '../services/FiveDayForecastServices';

export default function FiveDayForecast(props) {
  const [currentCityFiveDayForecast, setCurrentCityFiveDayForecast] =
    useState();

  useEffect(() => {
    const getFiveDayForecastInfo = async (key) => {
      const forecast = await getFiveDayForecast(key);
      setCurrentCityFiveDayForecast(forecast);
    };
    getFiveDayForecastInfo(props.cityKey);
  }, [props.cityKey]);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          m: 1,
          p: 1,
        }}
      >
        {currentCityFiveDayForecast &&
          currentCityFiveDayForecast.map((forecast) => (
            <Card
              key={forecast.day}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minWidth: 80,
                maxHeight: 140,
                p: 1,
                m: 1,
                backgroundColor: '#c3dbd959',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  maxWidth: 120,
                  maxHeight: 140,
                }}
              >
                <Typography gutterBottom variant='h5' component='div'>
                  {forecast.day}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {forecast.temperature}&deg; c
                </Typography>
                <CardMedia
                  sx={{ mt: 1 }}
                  component='img'
                  alt='weather icon'
                  height='50'
                  image={forecast.iconURL}
                />
              </CardContent>
            </Card>
          ))}
      </Box>
    </div>
  );
}
