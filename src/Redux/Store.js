import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";
const store = configureStore({
    reducer:{
        sliceReducer: slice
    }
})
export default store;