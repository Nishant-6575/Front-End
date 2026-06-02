import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        DeleteTodo:(state,action)=>{
            state.todos = state.todos.filter((data,index) => index !== action.payload)
        }
    }
})

export const {AddTodo,DeleteTodo} = todoSlice.actions;

export default todoSlice.reducer;