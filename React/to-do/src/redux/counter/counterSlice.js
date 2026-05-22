import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 1
}
export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        zero: (state) => {
            state.value = 0
        }
    }
})

export const { increment, decrement, zero } = counterSlice.actions

export default counterSlice.reducer