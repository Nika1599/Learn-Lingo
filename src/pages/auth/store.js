import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slice';
import { teachersReducer } from '../teacherInformation/teachersSlice';
import favouriteReducer from './favouriteSlice';
import filterReducer from '../teachersInfo/filterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favourites: favouriteReducer,
    filters: filterReducer,
  },
});

export default store;
