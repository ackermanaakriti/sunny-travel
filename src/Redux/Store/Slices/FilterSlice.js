import { createSlice } from "@reduxjs/toolkit";




const filterSlice = createSlice({
    name:'filters',
    initialState:{
        activities:[],
        packages:[],
        budget:[]
    },
    reducers:({
        addFilters:(state,action)=>
        {
            state.push(action.payload)
        }

    })
})
export default filterSlice
export const addFilters=filterSlice.actions;

