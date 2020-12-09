import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from 'reducers/loginForm';
import authorizationReducer from 'reducers/authorization';
import newsReducer from 'reducers/news';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    authorization: authorizationReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
