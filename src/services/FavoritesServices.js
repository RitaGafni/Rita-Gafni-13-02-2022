import axios from 'axios';
import { getWeatherIconURL } from './WeatherDisplayServices';
import configData from '../data.json';

export const getFavoritesData = async (favorites) => {
  console.log('this is the fav', favorites);
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
  console.log('API get fav City Forecast');
  const data = await axios(
    `${configData.WEATHER_SERVER_URL}/currentconditions/v1/${key}?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN`
  );
  return data.data[0];
  //   return mockData;
};

const mockFavArray = [
  {
    cityName: 'element[1]',
    temperature: '2',
    weatherText: 'weatherData',
    iconURL: 'https://www.accuweather.com/images/weathericons/1.svg',
  },
  {
    cityName: 'element[1]',
    temperature: '15',
    weatherText: 'sdl sd;lfk',
    iconURL: 'https://www.accuweather.com/images/weathericons/18.svg',
  },
  {
    cityName: 'ds;,fkg;adklgfjas;dfkl;l',
    temperature: '-5',
    weatherText: 'fdgadfgdfg',
    iconURL: 'https://www.accuweather.com/images/weathericons/7.svg',
  },
  {
    cityName: 'element[1]',
    temperature: '5',
    weatherText: 'weatherData gg',
    iconURL: 'https://www.accuweather.com/images/weathericons/14.svg',
  },
  {
    cityName: 'element[1]',
    temperature: '25',
    weatherText: 'fgd',
    iconURL: 'https://www.accuweather.com/images/weathericons/31.svg',
  },
  {
    cityName: 'element[1]',
    temperature: '13',
    weatherText: 'weathdferData',
    iconURL: 'https://www.accuweather.com/images/weathericons/21.svg',
  },
];

const mockData = {
  LocalObservationDateTime: '2022-02-15T03:20:00-06:00',
  EpochTime: 1644916800,
  WeatherText: 'Mist',
  WeatherIcon: 40,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: false,
  Temperature: {
    Metric: {
      Value: 15,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 59,
      Unit: 'F',
      UnitType: 18,
    },
  },
  MobileLink:
    'http://www.accuweather.com/en/hn/tegucigalpa/188046/current-weather/188046?lang=en-us',
  Link: 'http://www.accuweather.com/en/hn/tegucigalpa/188046/current-weather/188046?lang=en-us',
};
