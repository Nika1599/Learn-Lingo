import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  language: '',
  level: '',
  price: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setLanguage, setLevel, setPrice, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
