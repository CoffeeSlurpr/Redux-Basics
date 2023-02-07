import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./actions";

const songsSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      return state.filter((element) => element !== action.payload);
    },
  },

  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;

export default songsSlice.reducer;
