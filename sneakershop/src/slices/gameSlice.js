import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "001": {
    name: "Street Fighter 6",
    src: "sf6.jpg",
    genre1: "Файтинг",
    genre2: "Приключения",
    genre3: "РПГ",
    oldprice: "9999",
    price: "5299",
    collection: "",
  },
  "002": {
    name: "Watch Dogs: Legion",
    src: "wd.png",
    genre1: "Экшен",
    genre2: "Шутер",
    genre3: "Приключения",
    oldprice: "9999",
    price: "1679",
    collection: "Сильный сюжет",
  },
  "003": {
    name: "Far Cry 6",
    src: "farcry.png",
    genre1: "Экшен",
    genre2: "Шутер",
    genre3: "РПГ",
    oldprice: "9999",
    price: "1899",
    collection: "Сильный сюжет",
  },
};

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGames } = gameSlice.actions;
export default gameSlice.reducer;
