import React from 'react';
import Box from '@mui/material/Box';
import ForecastSummary from './HomeForecastSummary';
import FiveDayForecast from './HomeFiveDayForecast';
import CurrentWeather from './HomeCurrentWeather';
import HomeAddToFavorites from './HomeAddToFavorites';

export default function WeatherDisplay(props) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          p: 1,
          m: 1,
          maxWidth: 1200,
          maxHeight: 800,
          width: '100%',
          height: '100%',
          border: 1,
          borderRadius: 4,
          borderColor: '#92A9BD',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            p: 1,
            m: 1,
            maxWidth: 1000,
            maxHeight: 500,
            width: '100%',
            heigh: '100%',
          }}
        >
          <Box>
            <CurrentWeather
              cityWeatherToDisplay={props.cityWeatherToDisplay}
              cityToDisplay={props.selectedCityName}
            />
          </Box>
          <Box>
            <HomeAddToFavorites
              cityKey={props.selectedCityKey}
              cityName={props.selectedCityName}
            />
          </Box>
        </Box>
        <Box>
          <ForecastSummary
            WeatherText={props.cityWeatherToDisplay.WeatherText}
          />
        </Box>
        <Box>
          <FiveDayForecast cityKey={props.selectedCityKey} />
        </Box>
      </Box>
    </div>
  );
}
