import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; // Existing auth reducer
import { crimeReportApi } from "../api/crimeReportApi"; // New API slice
import crimeReportReducer from "../features/crimeReportSlice"; // New slice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Existing auth reducer
    [crimeReportApi.reducerPath]: crimeReportApi.reducer, // Add crimeReportApi reducer
    crimeReport: crimeReportReducer, // Add crimeReportSlice reducer (optional)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crimeReportApi.middleware), // Add crimeReportApi middleware
});