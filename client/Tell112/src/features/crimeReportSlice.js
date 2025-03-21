import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const crimeReportSlice = createSlice({
  name: "crimeReport",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("createCrimeReport/pending", (state) => {
        state.isLoading = true;
      })
      .addCase("createCrimeReport/fulfilled", (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase("createCrimeReport/rejected", (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});

export const { reset } = crimeReportSlice.actions;

export default crimeReportSlice.reducer;