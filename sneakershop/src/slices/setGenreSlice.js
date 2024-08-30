import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: [],
  genreProducts: [],
};

const setGenreSlice = createSlice({
  name: "setGenre",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    addGenre: (state, action) => {
      state.genre.push(action.payload);
    },
    deleteGenre: (state, action) => {
      const index = state.genre.indexOf(action.payload);
      state.genre.splice(index, 1);
    },
    resetGenre: (state) => {
      state.genre = null;
    },
    addGenreProduct: (state, action) => {
      state.genreProducts.push(action.payload);
    },
    resetGenreProducts: (state) => {
      state.genreProducts = [];
    },
    deleteGenreProduct: (state, action) => {
      const index = state.genreProducts.indexOf(action.payload);
      state.genreProducts.splice(index, 1);
    },
  },
});

export const {
  setGenre,
  addGenre,
  deleteGenre,
  resetGenre,
  addGenreProduct,
  resetGenreProducts,
  deleteGenreProduct,
} = setGenreSlice.actions;
export default setGenreSlice.reducer;
