import { configureStore } from '@reduxjs/toolkit';
import wordSlice from './word-slice';

export const store = configureStore({
  reducer: {
    word: wordSlice.reducer,
  },
});
