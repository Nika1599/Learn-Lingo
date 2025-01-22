import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slice';
import { teachersReducer } from '../teacherInformation/teachersSlice';
import favouriteReducer from './favouriteSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favourites: favouriteReducer,
  },
});

export default store;
