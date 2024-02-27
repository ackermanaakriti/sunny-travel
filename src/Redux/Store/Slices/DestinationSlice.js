import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'http://192.168.1.7:8000';

export const fetchDestination = createAsyncThunk(
    'destination/fetchDestination',
    async () => {
      const response = await axios.get(`${baseUrl}/api/v1/destination`); 
      return response.data;
    }
);

const DestinationSlice = createSlice({
    name: 'destination',
    initialState: {
      destinationdata: null,
      loading: false,
      error: null
    },
    reducers: {
      // You can define additional reducers here if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchDestination.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDestination.fulfilled, (state, action) => {
          state.loading = false;
          state.destinationdata = action.payload;
        })
        .addCase(fetchDestination.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
});

export default DestinationSlice;
