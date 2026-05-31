import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Lab/Hooks/TaskSlice";

export const store = configureStore({
    reducer: {
        task: reducer
    }
})