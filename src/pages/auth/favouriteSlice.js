import { createSlice } from '@reduxjs/toolkit';

const loadFromFavourites = () => {
  try {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    if (Array.isArray(favourites)) {
      return favourites;
    }
  } catch (error) {
    console.error('Error loading favourites', error);
  }
  return [];
};

const initialState = {
  favourites: loadFromFavourites(),
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { teacherId } = action.payload;
      if (!state.favourites.includes(teacherId)) {
        state.favourites.push(teacherId);
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      }
    },
    removeFromFavorites: (state, action) => {
      const { teacherId } = action.payload;
      state.favourites = state.favourites.filter(id => id !== teacherId);
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
