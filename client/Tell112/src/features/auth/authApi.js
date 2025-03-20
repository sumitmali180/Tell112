import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Signup API
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://tell112.onrender.com/api/auth/signup", userData);
      return response.data; // { user, token }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);

// Login API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://tell112.onrender.com/api/auth/login", userData);
      return response.data; // { user, token }
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);