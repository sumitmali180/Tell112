import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser } from "./authApi"; // Import your async thunks

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null, // Initialize token from localStorage
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Clear token from localStorage
    },
  },
  extraReducers: (builder) => {
    // Handle signupUser actions
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user; // Store user data
      state.token = action.payload.token; // Store token
      localStorage.setItem("token", action.payload.token); // Save token to localStorage
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store error message
    });

    // Handle loginUser actions
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user; // Store user data
      state.token = action.payload.token; // Store token
      localStorage.setItem("token", action.payload.token); // Save token to localStorage
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store error message
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;