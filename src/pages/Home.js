import React, { useState, useEffect } from 'react';
import SearchBar from '../components/HomeSearchBar';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import WeatherDisplay from '../components/HomeWeatherDisplay';
import { getCityForecast } from '../services/HomeServices';
import { useSelector } from 'react-redux';
import sadCloud from '../images/kindpng_112382.png';
import Image from 'mui-image';

export default function Home() {
  const selectedCity = useSelector((state) => state.selectedCity);

  const [cityWeatherToDisplay, setCityWeatherToDisplay] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async (selectedCityKey) => {
      try {
        const data = await getCityForecast(selectedCityKey);
        setCityWeatherToDisplay(data.data[0]);

        setError('');
      } catch (e) {
        console.error(e);
        setError(`something went wrong :( there in no forecast to display `);
      }
    };
    getWeather(selectedCity[0]);
  }, [selectedCity]);

  return (
    <div
      style={{
        textAlign: '-webkit-center',
      }}
    >
      <Box sx={{ maxWidth: 1200 }}>
        {error && (
          <Box sx={{ m: 3 }}>
            <Alert
              severity='error'
              sx={{ alignItems: 'center', maxWidth: 800 }}
            >
              {error}
            </Alert>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            m: 1,
            p: 1,
            maxWidth: 1000,
            maxHeight: 1000,
          }}
        >
          <SearchBar />
          {!error && cityWeatherToDisplay && (
            <WeatherDisplay
              selectedCityKey={selectedCity[0]}
              selectedCityName={selectedCity[1]}
              cityWeatherToDisplay={cityWeatherToDisplay}
            />
          )}
          {error && (
            <Box
              sx={{
                m: 3,
                pt: 5,
              }}
            >
              <Image width='60%' height='60%' src={sadCloud} />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
