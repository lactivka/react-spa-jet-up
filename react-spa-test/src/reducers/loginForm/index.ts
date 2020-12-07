import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { isLoginFormOpen: false };

const loginFormSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    toggleLoginForm: (state, { payload }) => {
      state.isLoginFormOpen = payload.isLoginFormOpen;
    },
  },
});

export const { toggleLoginForm } = loginFormSlice.actions;
export default loginFormSlice.reducer;
