import axios from 'axios';
import { getWeatherIconURL } from './WeatherDisplayServices';
import configData from '../config.json';

export const getFavoritesData = async (favorites) => {
  const favoritesArray = favorites.map(async (element) => {
    const weatherData = await getWeatherInfo(element[0]);

    const cityData = {
      cityName: element[1],
      temperature: Math.round(weatherData.Temperature.Metric.Value),
      weatherText: weatherData.WeatherText,
      iconURL: getWeatherIconURL(weatherData.WeatherIcon),
      key: element[0],
    };
    return cityData;
  });
  return await Promise.all(favoritesArray);
};

const getWeatherInfo = async (key) => {
  const data = await axios(
    `${configData.WEATHER_SERVER_URL}/currentconditions/v1/${key}?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN`
  );
  return data.data[0];
};
