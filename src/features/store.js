import { configureStore } from "@reduxjs/toolkit";
import partySizeReducer from "./partySize/partySizeSlice.js";
import dateFieldReducer from './dateField/dateFieldSlice.js';
import errorReducer from "./error/errorSlice.js";


const store = configureStore({
    reducer: {
        partySize: partySizeReducer,
        dateField: dateFieldReducer,
        error: errorReducer
    }
})


export default store;