import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRead = createAsyncThunk(
    "useRead", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const userSlice = createSlice({
    name: "userDetail",
    initialState: {
        loading: true,
        userData: [],
        error: ""
    },
    reducers: {
        userDataPending: (state, action) => {
            state.loading = true
        },
        userDataRecived: (state, action) => {
            state.loading = false
            state.userData.push(action.payload)
        },
        userDataError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRead.pending, (state) => {
                state.loading = true
            })
            .addCase(userRead.fulfilled, (state,action) => {
                state.loading = false
                state.userData = action.payload
            })
            .addCase(userRead.rejected, (state,action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer

export const { userDataPending, userDataRecived, userDataError } = userSlice.actions