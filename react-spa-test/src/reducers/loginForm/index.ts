import { createSlice } from '@reduxjs/toolkit';
import LoginForm from './models';

const initialState: LoginForm = { isLoginFormOpen: false };

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
