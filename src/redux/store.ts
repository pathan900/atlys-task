import { configureStore, Reducer } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './slice/authSlice';

export const store = configureStore({
    reducer: {
      auth: authReducer as Reducer<AuthState>,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
