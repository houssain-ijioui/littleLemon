import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    partySize: 0
}


const partySizeSlice = createSlice({
    name: "partySize",
    initialState,
    reducers: {
        increasePS: (state) => {
            state.partySize = state.partySize < 10 ? state.partySize + 1 : state.partySize;
        },
        decreasePS: (state) => {
            state.partySize = state.partySize > 0 ? state.partySize - 1 : state.partySize;
        }
    }
})


export const { increasePS, decreasePS } = partySizeSlice.actions;
export default partySizeSlice.reducer;