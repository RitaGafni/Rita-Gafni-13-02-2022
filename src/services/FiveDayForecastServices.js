import { getWeatherIconURL } from './WeatherDisplayServices';
import axios from 'axios';
import configData from '../data.json';

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

  console.log('final 5 day', selectedCityFiveDaysForecast);
  return selectedCityFiveDaysForecast;
};

const getFiveDaysForecastFromAPI = async (key) => {
  const data = await axios(
    `${configData.WEATHER_SERVER_URL}/forecasts/v1/daily/5day/${key}?apikey=G0W5yfIHdCSAiqzjEyQ2t6avDqv0GTGN&metric=true`
  );
  console.log('5 day api', data.data);

  return data.data;
};

const forecast = {
  Headline: {
    EffectiveDate: '2022-02-19T07:00:00+02:00',
    EffectiveEpochDate: 1645246800,
    Severity: 7,
    Text: 'Mostly sunny this weekend',
    Category: '',
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2022-02-16T07:00:00+02:00',
      EpochDate: 1644987600,
      Temperature: {
        Minimum: {
          Value: 10.2,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 18,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2022-02-17T07:00:00+02:00',
      EpochDate: 1645074000,
      Temperature: {
        Minimum: {
          Value: 11.2,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 17.9,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: 'Cloudy',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2022-02-18T07:00:00+02:00',
      EpochDate: 1645160400,
      Temperature: {
        Minimum: {
          Value: 12.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 18.8,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2022-02-19T07:00:00+02:00',
      EpochDate: 1645246800,
      Temperature: {
        Minimum: {
          Value: 11,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 17.4,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
    },
    {
      Date: '2022-02-20T07:00:00+02:00',
      EpochDate: 1645333200,
      Temperature: {
        Minimum: {
          Value: 12,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 18.8,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
    },
  ],
};
