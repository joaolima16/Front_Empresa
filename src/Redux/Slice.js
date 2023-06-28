import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "construction",
    initialState: {
        obra: '',
        resumo: '',
        images: [],
        status: ''
    },
    reducers:{
        changeConstruction(state, {payload}) {
            return {...state, obra: payload[0], summary: payload[2],}
        }
    }
})
export const {changeConstruction} = slice.actions;

export default slice.reducer;