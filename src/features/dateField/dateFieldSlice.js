import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dateField: null
}


const dateFieldSlice = createSlice({
    name: "dateField",
    initialState,
    reducers: {
        resetDate: (state) => {
            state.dateField = null
        },
        changeDate: (state, action) => {
            state.dateField = action.payload
        }
    }
})


export const { changeDate, resetDate } = dateFieldSlice.actions;
export default dateFieldSlice.reducer;