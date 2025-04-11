import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser, logoutUser, refreshUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.loading = false;
}

const handleRejected = (state, action) => {
  state.loading = false;
      state.error = action.payload;
};

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createNewUser.pending, handlePending)
    .addCase(createNewUser.fulfilled, handleFulfilled)
    .addCase(createNewUser.rejected, handleRejected)
    .addCase(loginUser.pending, handlePending)
    .addCase(loginUser.fulfilled, handleFulfilled)
    .addCase(loginUser.rejected, handleRejected)
    .addCase(logoutUser.pending, handlePending)
    .addCase(logoutUser.fulfilled, state => {
      state.user = {name: null, email: null};
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    })
    .addCase(logoutUser.rejected, handleRejected)
    .addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.error = null;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    })
  },
});

export const authReducer = authSlise.reducer;