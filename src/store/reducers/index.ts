import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import adminReducer from './adminReducer';
import loadingReducer from './loadingReducer';
import roomReducer from './roomReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  loading: loadingReducer,
  room: roomReducer
});

export default rootReducer;
