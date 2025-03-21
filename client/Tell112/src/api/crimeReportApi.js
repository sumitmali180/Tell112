import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crimeReportApi = createApi({
  reducerPath: "crimeReportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tell112.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    createCrimeReport: builder.mutation({
      query: (formData) => ({
        url: "crime-reports",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreateCrimeReportMutation } = crimeReportApi;