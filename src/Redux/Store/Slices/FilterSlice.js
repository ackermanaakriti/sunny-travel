import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";



 export const fetchfilteredRegion = createAsyncThunk(
    'filters/fetchfilteredRegion',
    async(regiondata)=>
    {
        return regiondata
    }
 )
 export const fetchfilteredActivities = createAsyncThunk(
    'filters/fetchfilteredActivities',
    async(activitiesdata)=>
    {
        return activitiesdata
    }
 )
 export const fetchfilteredBudget = createAsyncThunk(
    'filters/fetchfilteredBudget',
    async(budgetdata)=>
    {
        return budgetdata
    }
 )
const filterSlice = createSlice({
    name:'filters',
    initialState:{
        activities:[],
        region:[],
        budget:[],
        loading:null
    },
    reducers:({
   }),
   extraReducers:(builder)=>{
    builder
     .addCase(fetchfilteredRegion.pending,(state,action)=>
    {
        state.loading=true
    })
    .addCase(fetchfilteredRegion.fulfilled,(state,action)=>
    {
        state.loading=true
        state.region= action.payload
    })
    .addCase(fetchfilteredActivities.pending,(state,action)=>
    {
        state.loading=true
    })
    .addCase(fetchfilteredActivities.fulfilled,(state,action)=>
    {
        state.loading=true
        state.activities= action.payload
    })
    .addCase(fetchfilteredBudget.pending,(state,action)=>
    {
        state.loading=true
    })
    .addCase(fetchfilteredBudget.fulfilled,(state,action)=>
    {
        state.loading=true
        state.budget= action.payload
    })
   }
})
export default filterSlice
export const {addFilterActivity,addFilterBudget,addFilterRegion}=filterSlice.actions;

