import axios from 'axios';
import { NewsItem } from 'reducers/news/models';

export default axios.create({
  baseURL: 'http://newsapi.org/v2/',
  responseType: 'json',
});

export const axiosWeather = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  responseType: 'json',
});

export const defineTooltip = (
  isAuth: boolean,
  favorite: NewsItem[],
  item: NewsItem,
): string => {
  if (isAuth) {
    if (favorite.includes(item)) return 'Remove from favorite';
    return 'Add to favorite';
  }
  return 'Authorize to select favorite news';
};

export class CustomError extends Error {}
