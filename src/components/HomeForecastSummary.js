import React from 'react';
import Typography from '@mui/material/Typography';

export default function ForecastSummary(props) {
  return (
    <div>
      <Typography variant='h2' gutterBottom component='div'>
        {props.WeatherText}
      </Typography>
    </div>
  );
}
