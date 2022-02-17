import React, { useState, useEffect } from 'react';
import SearchBar from '../components/HomeSearchBar';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import WeatherDisplay from '../components/HomeWeatherDisplay';
import { getCityForecast } from '../services/HomeServices';
import { useLocation } from 'react-router-dom';
import configData from '../config.json';
import sadCloud from '../images/kindpng_112382.png';
import Image from 'mui-image';

export default function Home() {
  const [selectedCityKey, setSelectedCityKey] = useState(
    configData.DEFAULT_CITY_KEY
  );

  console.log('city data ', configData.DEFAULT_CITY);

  const [selectedCityName, setSelectedCityName] = useState(
    configData.DEFAULT_CITY
  );
  const [cityWeatherToDisplay, setCityWeatherToDisplay] = useState();
  const [error, setError] = useState('');

  const data = useLocation();

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
    let key = selectedCityKey;
    console.log('use effect');
    if (data.state) {
      setSelectedCityKey(data.state.key);
      setSelectedCityName(data.state.cityName);
      key = data.state.key;
    }
    getWeather(key);
  }, [data.state, selectedCityKey, selectedCityName]);

  console.log('city weather', cityWeatherToDisplay);

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      city name: {selectedCityName} , city key: {selectedCityKey}
      {error && (
        <Box sx={{ m: 3 }}>
          <Alert severity='error' sx={{ alignItems: 'center' }}>
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
        <SearchBar
          setSelectedCityKey={(key) => setSelectedCityKey(key)}
          setSelectedCityName={(name) => setSelectedCityName(name)}
        />
        {!error && cityWeatherToDisplay && (
          <WeatherDisplay
            selectedCityKey={selectedCityKey}
            selectedCityName={selectedCityName}
            cityWeatherToDisplay={cityWeatherToDisplay}
          />
        )}
        {error && (
          <Box sx={{ m: 3, pt: 5, backgroundImage: { sadCloud } }}>
            <Image src={sadCloud} />
          </Box>
        )}
      </Box>
    </div>
  );
}
