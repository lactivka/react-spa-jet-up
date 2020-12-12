import { message, Modal } from 'antd';

export const FETCH_ERROR = 'Ooops! An error occurred! Try again later.';

export const NEWS_ERROR =
  "Ooops! An error occurred! Can't get recent news. Try again later.";

export const CURRENT_LOCATION_ERROR =
  "Ooops! An error occurred! Can't get current location. Try again later.";

export const WEATHER_ERROR =
  "Ooops! An error occurred! Can't get weather for that location. Try again later.";

export const SEARCHING_LOCATION_ERROR =
  'Location not found. Please, input correct name.';

export const API_NEWS_KEY = '144ef1280a9f452b91b552e92d353028';

export const getHeadlinesForUAurl = `top-headlines?country=ua&apiKey=${API_NEWS_KEY}`;

export const API_OWM_KEY = '3f74331d3a059d7d629d84e741317f30';

export const API_IPINFO_TOKEN = '6e5d44f10d77f2';

export const getCurrentLocationURL = `https://ipinfo.io/json?token=${API_IPINFO_TOKEN}&geo`;

export const getWeatherByCityURL = (city: string): string =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_OWM_KEY}`;

export const getWeatherByCoordURL = (lat: string, lon: string): string =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${API_OWM_KEY}`;

export const emailPattern = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

export const error = (): void => {
  message.error('Invalid email or password');
};

export const warning = (): void => {
  message.warning('To visit this page, authorize, please.');
};

export const success = (): void => {
  message.success('Authorized!');
};

export const modalError = (e: string): void => {
  Modal.error({
    title: 'Error',
    content: e,
  });
};
