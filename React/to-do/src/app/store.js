import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counter/counterSlice";
import  todoSlice  from "../redux/todo/todoSlice";

export default configureStore({

    reducer: {
        count: counterSlice,
        todo: todoSlice
    }
})