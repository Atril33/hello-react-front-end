import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greeting/greetingSlice";

export const store = configureStore({
    reducer: {
       greeting: greetingReducer,
    },
});

export default store;