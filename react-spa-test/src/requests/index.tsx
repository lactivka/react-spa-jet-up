import { getHeadlinesForUAurl } from '@constants/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { NewsData } from 'reducers/news/models';
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
      // console.log('err in axios');
      return rejectWithValue(e);
    }
  },
);
