import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News, NewsItem } from './models';
import fetchNews from '../../requests';

const initialState: News = {
  data: [],
  favorite: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<NewsItem>) => {
      state.favorite.push(payload);
    },
    deleteFromFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorite.splice(payload, 1);
    },
    removeError: (state, { payload }: PayloadAction<string | null>) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const {
  addToFavorite,
  deleteFromFavorite,
  removeError,
} = newsSlice.actions;
export default newsSlice.reducer;
