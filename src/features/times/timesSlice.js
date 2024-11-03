import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    times: []
}


const timesSlice = createSlice({
    name: "times",
    initialState,
    reducers: {
        initialTimes: (state, action) => {
            state.times = action.payload
        },
        updateTimes: (state, action) => {
            const indexOfItem = state.times.indexOf(action.payload)
            if (indexOfItem !== -1) {
                state.times.splice(indexOfItem, 1)
            }
        }
    }
})


export const { initialTimes, updateTimes } = timesSlice.actions;
export default timesSlice.reducer;