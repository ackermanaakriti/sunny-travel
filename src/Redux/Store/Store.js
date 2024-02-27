import { configureStore } from "@reduxjs/toolkit";
import DestinationSlice from "./Slices/DestinationSlice";
import PackageActivitySlice from "./Slices/PackagesAcitivity";

 export const store= configureStore({
    reducer:{
        destination:DestinationSlice.reducer,
        packageactivity: PackageActivitySlice.reducer
    }
})