// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../helper/axios";
import requests from "../helper/requests";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    dispatch({
      type: "GETNETFLIXORIGINALS",
    });

    const res = await axios.get(requests.getNetflixOriginals);

    dispatch({
      type: "GETNETFLIXORIGINALSPASSED",
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: "GETNETFLIXORIGINALSFAIL",
      payload:
        err.response && err.response.data.msg ? err.response.data.msg : err.msg,
    });
  }
};