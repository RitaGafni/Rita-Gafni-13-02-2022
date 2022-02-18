import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getWeatherIconURL } from '../services/WeatherDisplayServices';

export default function CurrentWeather(props) {
  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 400,
          maxHeight: 200,
          width: '100%',
          boxShadow: 0,
          backgroundColor: 'transparent',
        }}
      >
        <CardMedia
          component='img'
          height='100'
          width='80'
          image={getWeatherIconURL(props.cityWeatherToDisplay.WeatherIcon)}
          alt='weather icon'
        />
        <CardContent>
          <Typography noWrap={true} variant='h5' component='div'>
            {props.cityToDisplay}
          </Typography>
          <Typography
            noWrap={true}
            align='center'
            variant='h4'
            color='text.secondary'
            text-align='left'
          >
            {Math.round(props.cityWeatherToDisplay.Temperature.Metric.Value)}
            &deg; c
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
