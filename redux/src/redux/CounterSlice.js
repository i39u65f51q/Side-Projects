import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  toggleTheme: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrease: (state, action) => {
      state.counter = state.counter - action.payload.amount;
    },
    reSet: (state, action) => {
      state.counter = action.payload.counter;
      state.toggleTheme = action.payload.toggleTheme;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const counterActions = counterSlice.actions;
