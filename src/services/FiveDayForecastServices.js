import { getWeatherIconURL } from './WeatherDisplayServices';
import axios from 'axios';
import configData from '../config.json';

export const getFiveDayForecast = async (cityKey) => {
  const forecast = await getFiveDaysForecastFromAPI(cityKey);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let selectedCityFiveDaysForecast = [{}, {}, {}, {}, {}];

  for (var i = new Date().getDay(), j = 0; j < 5; i++, j++) {
    selectedCityFiveDaysForecast[j].day = weekDays[i % weekDays.length];
    selectedCityFiveDaysForecast[j].temperature = Math.round(
      forecast.DailyForecasts[j].Temperature.Maximum.Value
    );
    selectedCityFiveDaysForecast[j].iconURL = getWeatherIconURL(
      forecast.DailyForecasts[j].Day.Icon
    );
  }
  return selectedCityFiveDaysForecast;
};

const getFiveDaysForecastFromAPI = async (key) => {
  const data = await axios(
    `${configData.WEATHER_SERVER_URL}/forecasts/v1/daily/5day/${key}?apikey=${configData.API_KEY}&metric=true`
  );
  return data.data;
};
