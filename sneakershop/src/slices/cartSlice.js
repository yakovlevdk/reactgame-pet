import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { db } from "../firebase";
import { ref } from "firebase/database";
import { set, get, remove } from "firebase/database";
const initialState = {
  carts: [],
};

export const addCart = createAsyncThunk(
  "carts/addCart",
  async (cart, { getState }) => {
    const userId = getState().user.id;

    if (userId) {
      const cartDbRef = ref(db, "carts/" + userId);
      const currentCartSnapshot = await get(cartDbRef);
      let currentCart = currentCartSnapshot.val() || {};
      const cartID = cart.id;
      currentCart = {
        ...currentCart,
        [cartID]: {
          ...cart,
        },
      };

      set(cartDbRef, currentCart);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "carts/deleteCart",
  async (cartUID, { getState }) => {
    const userId = getState().user.id;

    if (userId) {
      const cartDbRef = ref(db, `/carts/${userId}/${cartUID}`);

      remove(cartDbRef);
    }
  }
);


const usersCarts = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});
export const { setCarts } = usersCarts.actions;

export default usersCarts.reducer;
