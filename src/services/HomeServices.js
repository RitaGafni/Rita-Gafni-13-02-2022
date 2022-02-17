import axios from 'axios';
import configData from '../data.json';

export const getCityForecast = async (key) => {
  console.log('API getCityForecast');
  //   return weather;
  return await axios(
    `${configData.WEATHER_SERVER_URL}/currentconditions/v1/${key}?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN`
  );
};

export const getAutocomplete = async (q) => {
  console.log('API getAutocomplete');
  return await axios.get(
    `${configData.WEATHER_SERVER_URL}/locations/v1/cities/autocomplete?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN&q=${q}`
  );
};

const weather = {
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
// const [cityToDisplay, setCityToDisplay] = useState({
//   Version: 1,
//   Key: '215854',
//   Type: 'City',
//   Rank: 31,
//   LocalizedName: 'Tel Aviv',
//   Country: {
//     ID: 'IL',
//     LocalizedName: 'Israel',
//   },
//   AdministrativeArea: {
//     ID: 'TA',
//     LocalizedName: 'Tel Aviv',
//   },
// });

// const [cityWeatherToDisplay, setCityWeatherToDisplay] = useState({
//   LocalObservationDateTime: '2022-02-15T03:20:00-06:00',
//   EpochTime: 1644916800,
//   WeatherText: 'Mist',
//   WeatherIcon: 40,
//   HasPrecipitation: false,
//   PrecipitationType: null,
//   IsDayTime: false,
//   Temperature: {
//     Metric: {
//       Value: 15,
//       Unit: 'C',
//       UnitType: 17,
//     },
//     Imperial: {
//       Value: 59,
//       Unit: 'F',
//       UnitType: 18,
//     },
//   },
//   MobileLink:
//     'http://www.accuweather.com/en/hn/tegucigalpa/188046/current-weather/188046?lang=en-us',
//   Link: 'http://www.accuweather.com/en/hn/tegucigalpa/188046/current-weather/188046?lang=en-us',
// });
