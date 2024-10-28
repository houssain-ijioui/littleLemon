import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dateField: null
}


const dateFieldSlice = createSlice({
    name: "dateField",
    initialState,
    reducers: {
        changeDate: (state, action) => {
            state.dateField = action.payload
        }
    }
})


export const { changeDate } = dateFieldSlice.actions;
export default dateFieldSlice.reducer;