import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    getMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesFailure } =
  moviesSlice.actions;

export const fetchMovies = (searchTerm) => async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${
        searchTerm === undefined || "" ? "wonder woman" : searchTerm
      }&apikey=aa50ad83`
    );

    console.log("Response data bool->  ", response);

    dispatch(getMoviesSuccess(response.data.Search));
  } catch (error) {
    dispatch(getMoviesFailure(error.message));
    console.log(error);
  }
};

export default moviesSlice.reducer;
