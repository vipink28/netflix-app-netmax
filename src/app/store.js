import { configureStore } from '@reduxjs/toolkit';
import { netflixOriginalsReducer, nowPlayingMoviesReducer, popularMoviesReducer, topRatedMoviesReducer, trendingAllReducer, upcomingMoviesReducer } from '../reducer';

export const store = configureStore({
  reducer: {
    netflixOriginals: netflixOriginalsReducer,
    topRatedMovies: topRatedMoviesReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer,
    trendingAll: trendingAllReducer,
    upcomingMovies: upcomingMoviesReducer
  },
});
