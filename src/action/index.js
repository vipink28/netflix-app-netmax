// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../helper/axios";
import requests from "../helper/requests";

//In async action where calling an api, create three dispatch functions.
export const getNetflixOriginals = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETNETFLIXORIGINALS",
    });

    // send request to api
    const res = await axios.get(requests.getNetflixOriginals);

    // dispatch when data is successfully received
    dispatch({
      type: "GETNETFLIXORIGINALSPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETNETFLIXORIGINALSFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};


export const getTrendingAll = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETTRENDING",
    });

    // send request to api
    const res = await axios.get(requests.getTrending);

    // dispatch when data is successfully received
    dispatch({
      type: "GETTRENDINGPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETTRENDINGFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};


export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETNOWPLAYINGMOVIES",
    });

    // send request to api
    const res = await axios.get(requests.getNowPlaying);

    // dispatch when data is successfully received
    dispatch({
      type: "GETNOWPLAYINGMOVIESPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETNOWPLAYINGMOVIESFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};

export const getPopularMovies = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETNOWPOPULARMOVIES",
    });

    // send request to api
    const res = await axios.get(requests.getPopularMovies);

    // dispatch when data is successfully received
    dispatch({
      type: "GETNOWPOPULARMOVIESPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETNOWPOPULARMOVIESFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETTOPRATEDMOVIES",
    });

    // send request to api
    const res = await axios.get(requests.getTopRatedMovies);

    // dispatch when data is successfully received
    dispatch({
      type: "GETTOPRATEDMOVIESPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETTOPRATEDMOVIESFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    // this dispatch function will execute until the api request is completed.
    dispatch({
      type: "GETUPCOMINGMOVIES",
    });

    // send request to api
    const res = await axios.get(requests.getUpcomingMovies);

    // dispatch when data is successfully received
    dispatch({
      type: "GETUPCOMINGMOVIESPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    
    //dispatch when there is an error receiving the data
    dispatch({
      type: "GETUPCOMINGMOVIESFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};