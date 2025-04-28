import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setSearchFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setSearchFilter } = slice.actions;

export const filtersReducer = slice.reducer;
