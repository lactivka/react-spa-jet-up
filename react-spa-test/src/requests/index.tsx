import {
  getHeadlinesForUAurl,
  getWeatherByCoordURL,
} from '@constants/constants';
import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
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
    } catch (e) {
      // console.log('err in axios');
      return rejectWithValue(e);
    }
  },
);

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (URL: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<OWMData> = await axios.get(URL);
      return response.data;
    } catch (e) {
      // console.log('err in axios');
      return rejectWithValue(e);
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
    } catch (e) {
      // console.log('err in axios');
      return rejectWithValue(e);
    }
  },
);
