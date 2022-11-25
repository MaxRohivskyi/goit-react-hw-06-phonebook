import { createSlice } from '@reduxjs/toolkit';

const FilterInitialState = { inputValue: '' };

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: FilterInitialState,
  reducers: {
    addFilter: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addFilter } = contactsFilterSlice.actions;
