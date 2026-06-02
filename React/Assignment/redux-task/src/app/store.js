import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Counter/Slice/CounterSlice";
import todoSlice from "../Todo/Slice/TodoSlice";
import userSlice from "../Crud/Slice/crudslice";

export default configureStore({
    reducer: {
        count: CounterSlice,
        todo: todoSlice,
        user: userSlice
    }
})