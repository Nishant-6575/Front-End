import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

export const Taskslice = createSlice({
    name: "task",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
})

export const { increment } = Taskslice.actions

export default Taskslice.reducer