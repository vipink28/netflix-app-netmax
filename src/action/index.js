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