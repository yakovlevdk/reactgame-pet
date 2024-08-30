import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      // localStorage.setItem("user", JSON.stringify(state)); // Сохраняем состояние пользователя в localStorage
    },
    removeUser: (state) => {
      console.log("Removing user:", state); // Чтобы увидеть текущее состояние перед удалением

      state.email = null;
      state.token = null;
      state.id = null;
      // localStorage.removeItem("user"); // Убираем пользователя из localStorage
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
