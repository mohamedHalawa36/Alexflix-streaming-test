import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/config";
import { getAllFavorites } from "../../api/requests";

//create thunks

//1- get all videos
export const fetchAllVids = createAsyncThunk("allVideos", () => {
  return axiosInstance
    .get("movies")
    .then((res) => res?.data.data)
    .catch((error) => []);
});

//2- get all movies
export const fetchAllMovies = createAsyncThunk("allMovies", () => {
  return axiosInstance
    .get("movies/search", {
      params: { type: "movie" },
    })
    .then((res) => res?.data?.data)
    .catch((error) => []);
});
//3- get all series
export const fetchAllSeries = createAsyncThunk("allSeries", () => {
  return axiosInstance
    .get("movies/search", {
      params: { type: "series" },
    })
    .then((res) => res?.data?.data)
    .catch((error) => []);
});
//4- get all animes
export const fetchAllAnimes = createAsyncThunk("allAnimes", () => {
  return axiosInstance
    .get("movies/search", {
      params: { type: "anime" },
    })
    .then((res) => res.data.data)
    .catch((error) => []);
});

export const getAllFav = createAsyncThunk("allFav", () => {
  return getAllFavorites()
    .then((res) => res.data.data)
    .catch((error) => []);
});

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    movies: [],
    animes: [],
    series: [],
    favorites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    //Handling all videos
    builder.addCase(fetchAllVids.fulfilled, (state, action) => {
      state.movies = action.payload.filter((vid) => vid.type === "movie");
      state.series = action.payload.filter((vid) => vid.type === "series");
      state.animes = action.payload.filter((vid) => vid.type === "anime");
    });

    //Handling movies
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    //Handling series
    builder.addCase(fetchAllSeries.fulfilled, (state, action) => {
      state.series = action.payload;
    });
    //Handling animes
    builder.addCase(fetchAllAnimes.fulfilled, (state, action) => {
      state.animes = action.payload;
    });

    builder.addCase(getAllFav.fulfilled,(state, action) => {
      state.favorites = action.payload;
    })
  },
});

export default videosSlice.reducer;
export const { getAnimes, getMovies, getSeries } = videosSlice.actions;
