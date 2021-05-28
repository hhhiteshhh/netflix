import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login__App: (state, action) => {
      state.user = action.payload;
    },
    logout__App: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login__App, logout__App } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
