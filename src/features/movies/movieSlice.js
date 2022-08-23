import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import requests from "../../helper/requests";

const initialState = {
    nfOriginals: {
        status: 'idle',
        error: null
        
    },
    byGenre: {
        status: 'idle',
        error: null,
    },
    
    searchString: ""
}

export const fetchNfOrginals = createAsyncThunk(
    'movies/fetchNfOriginals',
    async () => {
      const response = await axios(requests.getNetflixOriginals);
      return response.data;
    }
  );



  export const fetchCategory = createAsyncThunk(
    'movies/fetchCategory',
    async (genre, pageCount) => {
      const response = await axios(requests.getByGenre(genre, pageCount));
      return response.data;
    }
  );


const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        searchQuery: (state, action) => {
            state.searchString = action.payload;
          },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchNfOrginals.pending, (state, action)=>{
            state.nfOriginals.status = 'loading';
        })
        .addCase(fetchNfOrginals.fulfilled, (state, action)=>{
            state.nfOriginals.status = 'succeeded';
            state.nfOriginals.details = action.payload
        })
        .addCase(fetchNfOrginals.rejected, (state, action)=>{
            state.nfOriginals.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchCategory.pending, (state, action)=>{
            state.byGenre.status = 'loading';
        })
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            state.byGenre.status = 'succeeded';
            state.byGenre.details = action.payload
        })
        .addCase(fetchCategory.rejected, (state, action)=>{
            state.byGenre.status = 'failed';
            state.error = action.error.message;
        })    }
});


export const { searchQuery } = movieSlice.actions;


export const getNfOriginals = (state) => state.movies.nfOriginals;
export const getItemByGenre = (state) => state.movies.byGenre;
export const getSearchString = (state) => state.movies.searchString;


export default movieSlice.reducer;