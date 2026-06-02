import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


// get User All
export const userRead = createAsyncThunk(
    'userRead', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:8000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// new data
export const createUser = createAsyncThunk(
    'createUser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:8000/users", data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const deleteUser = createAsyncThunk(
    'deleteUser', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:8000/users/${id}`)
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// edit users
export const EditUser = createAsyncThunk(
    'EditUser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:8000/users/${data.id}`,data)
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: true,
        users: [],
        error: ""
    },
    reducers: {
        userPeding: (state, action) => {
            state.loading = true
        },
        userFullFeild: (state, action) => {
            state.loading = false;
                state.users.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false;
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // all get user
            .addCase(userRead.pending, (state) => {
                state.loading = true
            })
            .addCase(userRead.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(userRead.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // newData add
            .addCase(createUser.pending, (state) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false
                state.users.push(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // delete case 

            .addCase(deleteUser.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter((data) => data.id != action.payload.id)

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // edit user
             .addCase(EditUser.pending, (state) => {
                state.loading = true
            })
            .addCase(EditUser.fulfilled, (state, action) => {
                state.loading = false
                
                state.users = state.users.map((user)=>{   
                    // 
                   if(user.id === action.payload.id){
                    return action.payload
                   }
                   return user
                })

            })
            .addCase(EditUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { userPeding, userFullFeild, userRejected } = userSlice.actions;

export default userSlice.reducer;