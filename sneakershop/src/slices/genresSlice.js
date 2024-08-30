import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: "top",
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = genresSlice.actions;
export default genresSlice.reducer;
