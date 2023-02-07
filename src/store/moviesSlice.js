import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./actions";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },

    removeMovie(state, action) {
      return state.filter((element) => element !== action.payload);
    },
  },

  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
