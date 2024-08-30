import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoriesProducts: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategorie: (state, action) => {
      state.categories.push(action.payload);
    },
    deleteCategorie: (state, action) => {
      const index = state.categories.indexOf(action.payload);

      state.categories.splice(index, 1);
    },
    setCategoriesProducts: (state, action) => {
      state.categoriesProducts = action.payload;
    },
    addCategoriesProduct: (state, action) => {
      state.categoriesProducts.push(action.payload);
    },
    resetCategoriesProducts: (state) => {
      state.categoriesProducts = [];
    },
  },
});

export const {
  setCategories,
  addCategorie,
  deleteCategorie,
  setCategoriesProducts,
  addCategoriesProduct,
  resetCategoriesProducts,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
