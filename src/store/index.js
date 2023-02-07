import { configureStore } from "@reduxjs/toolkit";
import songsReducer, { addSong, removeSong } from "./songsSlice";
import moviesReducer, { addMovie, removeMovie } from "./moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { addSong, removeSong, addMovie, removeMovie };
export default store;
