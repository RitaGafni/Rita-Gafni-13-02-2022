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
          maxWidth: 280,
          maxHeight: 200,
          width: '100%',
          boxShadow: 0,
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
          >
            {props.cityWeatherToDisplay.Temperature.Metric.Value}&deg;
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
