import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from 'reducers/loginForm';
import authorizationReducer from 'reducers/authorization';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    authorization: authorizationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
