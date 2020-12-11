import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentLocation, getWeather } from 'requests';
import { IPInfoData, Weather } from './models';

const currentLocationInitialState: IPInfoData = {
  city: '',
  country: '',
  ip: '',
  loc: '',
  org: '',
  postal: '',
  region: '',
  timezone: '',
};

const initialState: Weather = {
  currentLocation: currentLocationInitialState,
  locationWeather: [],
  loading: false,
  loadingCity: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    deleteLocation: (state, { payload }: PayloadAction<number>) => {
      state.locationWeather.splice(payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentLocation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.currentLocation = payload;
    });
    builder.addCase(getCurrentLocation.rejected, (
      state /* , { payload } */,
    ) => {
      state.loading = false;
      // state.error = payload;
    });
    builder.addCase(getWeather.pending, (state) => {
      state.loadingCity = true;
    });
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.loadingCity = false;
      if (state.locationWeather.every((item) => item.id !== payload.id))
        state.locationWeather.unshift(payload);
    });
    builder.addCase(getWeather.rejected, (state /* , { payload } */) => {
      state.loadingCity = false;
      // state.error = payload;
    });
  },
});

export const { deleteLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
