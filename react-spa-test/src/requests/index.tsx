import { getHeadlinesForUAurl } from '@constants/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils';

export default createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(getHeadlinesForUAurl);
      console.log(response.data);
      return response.data.articles;
    } catch (e) {
      console.log('err in axios');
      return rejectWithValue(e);
    }
  },
);
