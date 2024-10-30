import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00",]
}


const timesSlice = createSlice({
    name: "times",
    initialState,
    reducers: {
        updateTimes: (state, action) => {
            const indexOfItem = state.times.indexOf(action.payload)
            if (indexOfItem !== -1) {
                state.times.splice(indexOfItem, 1)
            }
        }
    }
})


export const { updateTimes } = timesSlice.actions;
export default timesSlice.reducer;