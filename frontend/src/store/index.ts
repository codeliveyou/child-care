import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a typed version of the useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Create a typed version of the useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
