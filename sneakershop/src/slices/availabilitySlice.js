import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availability: null,
  availabilityProduct: [],
};

export const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setAvailability: (state) => {
      state.availability = true;
    },

    deleteAvailability: (state) => {
      state.availability = null;
    },
    setAvailabilityProducts: (state, action) => {
      state.availabilityProduct = action.payload;
    },
    addAvailabilityProduct: (state, action) => {
      state.availabilityProduct.push(action.payload);
    },
    resetAvaibailityProducts: (state) => {
      state.availabilityProduct = [];
    },
  },
});

export const {
  setAvailability,
  deleteAvailability,
  setAvailabilityProducts,
  addAvailabilityProduct,
  resetAvaibailityProducts,
} = availabilitySlice.actions;
export default availabilitySlice.reducer;
