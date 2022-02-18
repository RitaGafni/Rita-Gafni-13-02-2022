import axios from 'axios';
import configData from '../config.json';

export const getCityForecast = async (key) => {
  return await axios(
    `${configData.WEATHER_SERVER_URL}/currentconditions/v1/${key}?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN`
  );
};

export const getAutocomplete = async (q) => {
  return await axios.get(
    `${configData.WEATHER_SERVER_URL}/locations/v1/cities/autocomplete?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN&q=${q}`
  );
};
