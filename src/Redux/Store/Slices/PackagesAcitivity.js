import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'http://192.168.1.7:8000';
// const initialState={
//     activity:[],
  
// }

// export const fetchPackages = createAsyncThunk(
//     'packageactivity/fetchPackages',
//     async () => {
//       const response = await axios.get(`${baseUrl}/api/v1/packages`); 
//       return response.data;
//     }
// );
export const fetchActivity= createAsyncThunk(
    'packageactivity/fetchActivity',
    async()=>
    {
        const response = await axios.get(`${baseUrl}/api/v1/activity`)
        return response.data;
    }
)


const PackageActivitySlice = createSlice({
    name: 'packageactivity',
   initialState:
   {
    activities:[],
    loading:'null',
    error:'hello'
   },
    reducers: {
      // You can define additional reducers here if needed
    },
    extraReducers: (builder) => {
      builder
        // .addCase(fetchPackages.pending, (state, action) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(fetchPackages.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.packages = action.payload;
        // })
        // .addCase(fetchPackages.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.error.message;
        // })
        .addCase(fetchActivity.pending, (state, action) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.activities = action.payload;
          })
          .addCase(fetchActivity.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    }
});

export default PackageActivitySlice;
