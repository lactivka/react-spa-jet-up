import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const currentState: string | null = localStorage.getItem('jwt-token');
const initialState: boolean =
  currentState === null ? false : (JSON.parse(currentState) as boolean);

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const { setIsAuth } = authorizationSlice.actions;
export default authorizationSlice.reducer;
