import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News, NewsItem } from './models';
import fetchNews from '../../requests';

const initialState: News = {
  data: [],
  favorite: [],
  loading: false,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      state.loading = false;
      // state.error = payload;
    });
  },
});

export const { addToFavorite, deleteFromFavorite } = newsSlice.actions;
export default newsSlice.reducer;
