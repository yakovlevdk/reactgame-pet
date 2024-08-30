import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genresSlice";
import userReducer from "./slices/userSlice";
import gameReducer from "./slices/gameSlice";
import categoriesReducer from "./slices/categoriesSlice";
import availabilityReducer from "./slices/availabilitySlice";
import generalReducer from "./slices/generalGames";
import setGenreReducer from "./slices/setGenreSlice";
import usersCartsReducer from "./slices/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  genres: genresReducer,
  user: userReducer,
  games: gameReducer,
  categories: categoriesReducer,
  availability: availabilityReducer,
  general: generalReducer,
  setGenre: setGenreReducer,
  carts: usersCartsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "genres",
    "games",
    "categories",
    "availability",
    "general",
    "setGenre",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
