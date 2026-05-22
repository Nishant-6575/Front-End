import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ["Nishant", "Paras"]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddinList: (state, action) => {
            state.todos.push(action.payload)
        },
        DeleteList: (state, action) => {
            state.todos = state.todos.filter((data, index) => index !== action.payload)
        },
        EditList: (state, action) => {
            state.todos[action.payload.index] = action.payload.value
        }
    }
})

export default todoSlice.reducer

export const { AddinList, DeleteList, EditList } = todoSlice.actions