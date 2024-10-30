import { configureStore } from "@reduxjs/toolkit";
import partySizeReducer from "./partySize/partySizeSlice.js";
import dateFieldReducer from './dateField/dateFieldSlice.js';
import timesReducer from "./times/timesSlice.js";


const store = configureStore({
    reducer: {
        partySize: partySizeReducer,
        dateField: dateFieldReducer,
        times: timesReducer
    }
})


export default store;