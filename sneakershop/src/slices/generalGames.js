import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  foundedGames: [],
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setFoundedGames: (state, action) => {
      state.foundedGames = action.payload;
    },
    resetFounedGames: (state) => {
      state.foundedGames = [];
    },
  },
});

export const { setFoundedGames, resetFounedGames } = generalSlice.actions;
export default generalSlice.reducer;
