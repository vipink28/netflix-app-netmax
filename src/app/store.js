import { configureStore } from '@reduxjs/toolkit';
import { netflixOriginalsReducer } from '../reducer';

export const store = configureStore({
  reducer: {
    netflixOriginals: netflixOriginalsReducer
  },
});
