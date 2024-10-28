import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    error: ""
}


const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        
    }
})


export const { changeDate } = errorSlice.actions;
export default errorSlice.reducer;