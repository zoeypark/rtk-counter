import {configureStore} from "@reduxjs/toolkit";
import { CounterSlice } from "./Slice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
    }
})