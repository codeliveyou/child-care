import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import adminReducer from './adminReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  loading: loadingReducer
});

export default rootReducer;
