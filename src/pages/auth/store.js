import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slice';
import { teachersReducer } from '../teacherInformation/teachersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
  },
});

export default store;
