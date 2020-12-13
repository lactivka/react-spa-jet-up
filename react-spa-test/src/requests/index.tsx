import {
  getHeadlinesForUAurl,
  getWeatherByCoordURL,
  WEATHER_ERROR,
  CURRENT_LOCATION_ERROR,
  NEWS_ERROR,
  SEARCHING_LOCATION_ERROR,
} from '@constants/constants';
import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { NewsData } from 'reducers/news/models';
import { IPInfoData, OWMData } from 'reducers/weather/models';
import axios from '../utils';

export default createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<NewsData> = await axios.get(
        getHeadlinesForUAurl,
      );
      return response.data.articles;
    } catch (e: unknown) {
      return rejectWithValue(NEWS_ERROR);
    }
  },
);

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (URL: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<OWMData> = await axios.get(URL);
      return response.data;
    } catch (e: unknown) {
      const err = e as AxiosError<OWMData>;
      if (err.response && err.response.status === 404)
        // modalError(SEARCHING_LOCATION_ERROR);
        return rejectWithValue(SEARCHING_LOCATION_ERROR);
      // else modalError(WEATHER_ERROR);
      return rejectWithValue(WEATHER_ERROR);
    }
  },
);

export const getCurrentLocation = createAsyncThunk(
  'weather/getCurrentLocation',
  async (
    {
      URL,
      dispatch,
    }: {
      URL: string;
      dispatch: Dispatch<
        AsyncThunkAction<OWMData, string, Record<string, unknown>>
      >;
    },
    { rejectWithValue },
  ) => {
    try {
      const { data }: { data: IPInfoData } = await axios.get(URL);
      const [lat, lon] = data.loc.split(',');
      const reqURL = getWeatherByCoordURL(lat, lon);
      dispatch(getWeather(reqURL));
      return data;
    } catch (e: unknown) {
      // modalError(CURRENT_LOCATION_ERROR);
      return rejectWithValue(CURRENT_LOCATION_ERROR);
    }
  },
);
