import { configureStore } from "@reduxjs/toolkit";
import partySizeReducer from "./partySize/partySizeSlice.js";


const store = configureStore({
    reducer: {
        partySize: partySizeReducer
    }
})


export default store;